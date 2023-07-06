<?php

namespace App\Helpers;

use App\Models\Document;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class DocumentsHandler{

    public User $user;
    public Student $student;

    function __construct(User $user, Student $student)
    {
        $this->user = $user;
        $this->student = $student;
    }

    public function saveDocument(UploadedFile $file, $docType ){
        $extension = $file->getClientOriginalExtension();
        $filename = $docType . '.' . $extension;

        $user = $this->user;
        $student = $this->student;

        $fullname = sprintf("%s %s", $user->lastname, $user->firstname);

        $path = sprintf("\%u\%s\%s",$student->year_admitted, $student->course->name, $fullname);

        return $file->storeAs($path, $filename, 'public');
    }
    
    public function createDocument($path, $docTypeId, 
                                $requestId, $withCopies){
        
        $studentId = $this->student->id;
        if($withCopies){
            $haveCopies = 1;
        }else{
            $haveCopies = 0;
        }
        return Document::create([
            "document_type_id"=> $docTypeId,
            "request_id"=> $requestId,
            "student_id"=> $studentId,
            "document_status_id"=> 3,
            "updated_by_id"=> $studentId,
            "file_path"=> $path,
            "url"=>Storage::disk('public')->url($path),
            "with_copies"=>  intval($haveCopies)
        ]);

    }
}