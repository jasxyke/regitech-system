<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Http\Controllers\Controller;
use App\Mail\VerifiedDocuments;
use App\Models\Document;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class VerifiedDocumentsController extends Controller
{
    //verify a list of documents
    public function verify_documents(Request $request, string $id, string $updated_by_id){
        $documents = $request->input('documents');
        $note = $request->input('note');

        $verification_request = ModelsRequest::findOrFail($id);
        $student = Student::find($verification_request->student_id);
        $user = $student->user;

        $missingDocuments = [];
        $invalidDocument = 0;
        $missingDocs = 0;
        $pendingDocs = 0;

        $submittedDocs = Document::with('document_type', 'document_status')
                                    ->where('student_id', $student->id)
                                    ->get();
        foreach($submittedDocs as $submittedDoc){
            //verified documents from current request
            foreach($documents as $modifiedDocument){
                if($modifiedDocument["id"] == $submittedDoc->id){
                    $document = $submittedDoc;
                    $document->document_status_id = $modifiedDocument["document_status_id"];
                    $document->with_copies = $modifiedDocument["with_copies"];
                    $document->updated_by_id = $updated_by_id;
                    $document->pdf_id = ($modifiedDocument["document_status_id"] == "1") ? $verification_request->pdf_id : null;
                    $document->save();
                    $document->load('document_status');

                if($modifiedDocument["document_status_id"] == 2){
                    $invalidDocument++;
                }
            }
        }
        if($submittedDoc->document_status_id == 3){
            $pendingDocs++;
        }
        if( $submittedDoc->document_status_id == 5){
            $missingDocs++;
        }
        }

        $submittedDocs = $submittedDocs->toArray();
        
        // //figures out what's missing
        // $documentTypes = Constants::DOCUMENT_TYPES;
        // $verifiedDocumentTypes = array_column($submittedDocs, "document_type_id");
        // foreach($documentTypes as $documentType){
        //     if(!in_array($documentType["id"], $verifiedDocumentTypes )){
        //         $missingDocument = array(
        //             "document_type"=>array(
        //                 "name"=>$documentType["name"]
        //             ),
        //             "document_status"=>array(
        //                 "id"=>"5",
        //                 "name"=>"Missing"
        //             )
        //             );
        //         array_push($missingDocuments, $missingDocument);
        //         $missingDocs++;
        //     }
        // }

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


        //$testEmail = "email niyo"; replace niyo lang yung $user->email sa baba kung gusto testing
        //$user->email
        Mail::to($user->email, $user->firstname)
                ->send(new VerifiedDocuments($user, $submittedDocs, $message, $note));

        if($missingDocs == 0 && $invalidDocument == 0 && $pendingDocs == 0){
            $student->student_status_id = 1;
            $student->save();
        }
        
        //set is_reviewed as done
        $verification_request->is_reviewed = 1;
        $verification_request->save();

        return response()->json(["message" => "Updated and emailed successfully"], 200);
        
    }

    function testEmail(Request $request){

        $user = $request->user();

        $verifiedDocuments = Document::with('document_status')
                                ->where('request_id','=','1')
                                ->get();
        $message = "One or more submitted document is invalid as indicated below:";
        $note = "taena pamunas na ng pwet tong birth cert mo ah";
        Mail::to($user->email, $user->firstname)
                ->send(new VerifiedDocuments($user, $verifiedDocuments, $message, $note));

        return response()->json(["message"=>"email sent"]);
    }
}
