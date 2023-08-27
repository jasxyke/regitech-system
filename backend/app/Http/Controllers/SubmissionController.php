<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Helpers\DocumentsHandler;
use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Pdf;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{
    
    function upload(Request $request){
        if(!$request->hasFile('document')){
            return response()->json(['message' => 'No files uploaded', 'request' => $request],400); 
        }

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

    function manualUpload(Request $request){
        $staff = $request->user();

        $fields = UserValidator::validateManualUpload($request);

        $user = User::create([
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'email'=>$fields['email'],
            'lastname'=>$fields['lastname'],
            'firstname'=>$fields['firstname'],
            'midname'=>$fields['midname'],
            'role_id'=>'4',
            'email_verified_at'=>now(),
            'remember_token'=>Str::random(10)
        ]);

        $student = Student::create([
            'user_id'=>$user->id,
            'course_id'=>$request->input('course_id'),
            'year_admitted'=>$request->input('year_admitted'),
            'student_status_id'=>'2',
        ]);

        $verifiedDocuments = $fields['documents'];

        foreach($verifiedDocuments as $document){
            Document::create([
                "document_type_id"=>$document["document_type_id"],
                "student_id"=>$student->id,
                "document_status_id"=>$document["document_status_id"],
                "updated_by_id"=>$staff->id,
                "with_copies"=>$document["with_copies"]
            ]) ;
        }

        return response()->json([
            "message"=>"Student and documents successfully added to masterlist"
        ]);
        
    }
}
