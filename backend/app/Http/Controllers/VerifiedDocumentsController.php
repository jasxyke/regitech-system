<?php

namespace App\Http\Controllers;

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
    public function verify_documents(Request $request, string $id){
        $documents = $request->input('documents');
        $note = $request->input('note');

        $verifiedDocuments = [];
        $invalidDocument = 0;
        //return $documents;
        foreach($documents as $modifiedDocument){
            $document = Document::with('document_type')
                        ->findOrFail($modifiedDocument["id"]);
            $document->document_status_id = $modifiedDocument["document_status_id"];
            $document->with_copies = $modifiedDocument["with_copies"];
            $document->save();
            $document->load('document_status');
            array_push($verifiedDocuments, $document);
            if($modifiedDocument["document_status_id"] == 2){
                $invalidDocument++;
            }
        }

        if($invalidDocument > 0){
            $message = "One or more submitted document is invalid as indicated below:";
        }else{
            $message = "All of your submitted documents has been verified and accepted.";
        }

        $verification_request = ModelsRequest::findOrFail($id);

        $user = Student::with('user')->where('id','=',$verification_request->student_id)->first()['user'];
        //$testEmail = "email niyo"; replace niyo lang yung $user->email sa baba kung gusto testing
        //$user->email
        Mail::to($user->email, $user->firstname)
                ->send(new VerifiedDocuments($user, $verifiedDocuments, $message, $note));

        

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
