<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Helpers\DocumentsHandler;
use App\Helpers\UrlConverter;
use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Mail\VerifiedDocuments;
use App\Models\Document;
use App\Models\Pdf;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{

    public static function checkUploadedFile(Request $request, $filename){
        if(!$request->hasFile($filename)){
            return response()->json(['message' => 'No files uploaded', 'request' => $request],400); 
        }
    }
    
    function upload(Request $request){
        self::checkUploadedFile($request, 'document');

        $document = $request->file("document");
        
        $user = $request->user();
        $student = Student::with("course")
                    ->where('user_id','=',$user->id)
                    ->first();

        $requestCount = count($student->requests);
        
        $documentHandler = new DocumentsHandler($user, $student);

        //$filename = $user->lastname . ' ' . $requestCount;
        $path = $documentHandler->saveDocument($document);
        $pdf = Pdf::create([
            'student_id'=>$student->id,
            "url"=>Storage::disk('public')->url($path),
            "file_path"=>$path
        ]);

        $submitRequest = ModelsRequest::create([
            "student_id"=>$student->id,
            "is_reviewed"=>0,
            'pdf_id'=>$pdf->id
        ]);

        if($requestCount == 0){
            $documentTypes = Constants::DOCUMENT_TYPES;
            foreach ($documentTypes as $documentType){
                Document::create([
                    "document_type_id"=>$documentType["id"],
                    "student_id"=>$student->id,
                    "document_status_id"=>"4",
                    "updated_by_id"=>$student->id,
                    "with_copies"=>0,
                    "pdf_id"=>null
                ]);
            }
        }

        return response()->json([
            "message"=> "Documents uploaded successfully",
        ]);
        
    }

    function addToMasterlist(Request $request){
        self::checkUploadedFile($request, 'pdfFile');

        $staff = $request->user();
        $hasNoEmail = $request->input('hasNoEmail');
        $isTransferee = $request->input('transferee');
        
        $fields = UserValidator::validateManualUpload($request);
        //create student account
        if($hasNoEmail){
            $studentUser = User::create([
                'password'=>bcrypt(strtolower($fields['lastname']) . '123'),//default password muna, <lastname>123
                'lastname'=>$fields['lastname'],
                'firstname'=>$fields['firstname'],
                'midname'=>$request->input('midname'),
                'role_id'=>'4',
                'email_verified_at'=>now(),
                'remember_token'=>Str::random(10)
            ]);
        }else{
            $studentUser = User::create([
                'email'=>$fields['email'],
                'password'=>bcrypt(strtolower($fields['lastname']) . '123'),//default password muna, <lastname>123
                'lastname'=>$fields['lastname'],
                'firstname'=>$fields['firstname'],
                'midname'=>$request->input('midname'),
                'role_id'=>'4',
                'email_verified_at'=>now(),
                'remember_token'=>Str::random(10)
            ]);
        }
        
        $student = Student::create([
            'user_id'=>$studentUser->id,
            'course_id'=>$request->input('course_id'),
            'year_admitted'=>$request->input('year_admitted'),
            'student_status_id'=>(!$isTransferee) ? '2' : '4',
        ]);

        
        $pdfFile = $request->file("pdfFile");
        $documentsChecklist = $request->input('checklist');
        $note = $request->input('note');

        $documentsHandler = new DocumentsHandler($studentUser, $student);

        $path = $documentsHandler->saveDocument($pdfFile);
        $pdf = Pdf::create([
            "student_id"=>$student->id,
            "url"=>Storage::disk('public')->url($path),
            "file_path"=>$path
        ]);

        $invalidDocument = 0;
        $missingDocs = 0;
        $pendingDocs = 0;

        $submittedDocuments = [];

        //create documents and its checklist
        foreach($documentsChecklist as $document){
            $newDocument = Document::create([
                "document_type_id"=>$document["document_type"]["id"],
                "student_id"=>$student->id,
                "document_status_id"=>$document["document_status_id"],
                "updated_by_id"=>$staff->id,
                "with_copies"=>(int) $document["with_copies"],

                //add its pdf id when it is verified or rejected, to signal that it is there
                "pdf_id"=>($document["document_status_id"] == "1" ||
                 $document["document_status_id"] == "2") ? $pdf->id : null
            ]) ;

            array_push($submittedDocuments, $newDocument);

            //check for any invalid, rejected, and 
            //missing documents for the email message
            if($document["document_status_id"] == 3){
                $pendingDocs++;
            }
            if($document["document_status_id"] == 5){
                $missingDocs++;
            }
            if($document["document_status_id"] == 2){
                $invalidDocument++;
            }
        }

        //email student
        if($invalidDocument > 0){
            $message = "One or more submitted document is invalid as indicated below:";
        }else if($missingDocs > 0){
            $message = "One or more requirements is missing.";
        }else if($pendingDocs > 0){
            $message = "One or more requirements is pending";
        }
        else{
            $message = "Congratulations! all of your submitted documents has been Verified.";
        }

        if($missingDocs == 0 && $invalidDocument == 0 && $pendingDocs == 0){
            $student->student_status_id = 1;
            $student->save();
        }

        if(!$hasNoEmail){
            Mail::to($studentUser->email, $studentUser->firstname)
            ->send(new VerifiedDocuments($studentUser, $submittedDocuments, $message, $note));

            return response()->json([
                "message"=>"Student account created, checklist added to masterlist, and emailed the student"
            ]);
        }

        return response()->json([
            "message"=>"Student info and checklist added to masterlist."
        ]);
        
    }

    public function addCredentials(Request $request, $studentId){
        self::checkUploadedFile($request, 'pdfFile');

        $staff = $request->user();
        $student = Student::with('user')
                        ->where('id','=',$studentId)
                        ->firstOrFail();
        
        $pdfFile = $request->file('pdfFile');
        $documentsChecklist = $request->input('checklist');
        $note = $request->input('note');

        $documentsHandler = new DocumentsHandler($student->user, $student);

        $path = $documentsHandler->saveDocument($pdfFile);
        $pdf = PDF::create([
            "student_id"=>$student->id,
            "url"=>Storage::disk('public')->url($path),
            "file_path"=>$path
        ]);

       $updatedChecklist = $documentsHandler->updateChecklist($documentsChecklist, $note, $staff->id, $pdf->id);

       $pdf = $pdf->load('documents', 'documents.document_type');

       return response()->json(["message"=>"Successfully added student credentials.", 
                        "checklist"=>$updatedChecklist, "pdfRecord"=>$pdf]);
    }
}
