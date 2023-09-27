<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Helpers\DocumentsHandler;
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
        $student = Student::with('user')->findOrFail($verification_request->student_id);
        $user = $student->user;

        $documentsHandler = new DocumentsHandler($user, $student);

        $documentsHandler->updateChecklist($documents, $note, $updated_by_id, $verification_request->pdf_id);
        
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
