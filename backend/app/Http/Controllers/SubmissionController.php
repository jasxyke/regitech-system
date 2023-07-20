<?php

namespace App\Http\Controllers;

use App\Helpers\Constants;
use App\Helpers\DocumentsHandler;
use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SubmissionController extends Controller
{
    
    function upload(Request $request){
        if(!$request->hasFile('document')){
            return response()->json(['message' => 'No files uploaded']); 
        }

        $document = $request->file("document");
        
        $user = $request->user();
        $student = Student::with("course")
                    ->where('user_id','=',$user->id)
                    ->first();

        $requestCount = count($student->requests);
        
        $documentHandler = new DocumentsHandler($user, $student);

        $filename = $user->lastname . ' ' . $requestCount;
        $path = $documentHandler->saveDocument($document,$filename );

        $submitRequest = ModelsRequest::create([
            "student_id"=>$student->id,
            "is_reviewed"=>0,
            "url"=>Storage::disk('public')->url($path),
            "file_path"=>$path
        ]);

        if($requestCount == 0){
            $documentTypes = Constants::DOCUMENT_TYPES;
            foreach ($documentTypes as $documentType){
                Document::create([
                    "document_type_id"=>$documentType["id"],
                    "student_id"=>$student->id,
                    "document_status_id"=>"5",
                    "updated_by_id"=>$student->id,
                    "with_copies"=>0
                ]);
            }
        }

        return response()->json([
            "message"=> "Documents uploaded successfully",
        ]);
        
    }
}
