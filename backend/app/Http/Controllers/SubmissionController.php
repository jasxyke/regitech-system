<?php

namespace App\Http\Controllers;

use App\Helpers\DocumentsHandler;
use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use Illuminate\Http\Request;

class SubmissionController extends Controller
{
    
    function upload(Request $request){
        if(!$request->hasFile('documents')){
            return response()->json(['message' => 'No files uploaded']); 
        }

        $documents = $request->file("documents");
        $documentInfos = $request->input("documentInfos");
        
        $user = $request->user();
        $student = Student::with("course")
                    ->where('user_id','=',$user->id)
                    ->first();

        $submitRequest = ModelsRequest::create([
            "student_id"=>$student->id,
            "is_reviewed"=>0
        ]);

        $submittedDocuments = [];

        $documentsHandler = new DocumentsHandler($user, $student); 

        for($i = 0; $i < count($documents); $i++){
            $document = $documents[$i];
            $info = $documentInfos[$i];

            $path = $documentsHandler->saveDocument($document, $info["document_type"]);
            $createdDocument = $documentsHandler->createDocument($path, $info["document_type_id"], $submitRequest->id, $info["with_copies"]);

            array_push($submittedDocuments, $createdDocument);
        }

        return response()->json([
            "message"=> "Documents uploaded successfully",
            "documents"=> $submittedDocuments,
        ]);
        
    }
}
