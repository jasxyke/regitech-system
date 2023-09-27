<?php

namespace App\Helpers;

use App\Mail\VerifiedDocuments;
use App\Models\Document;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class DocumentsHandler{

    public User $user;
    public Student $student;

    function __construct(User $user, Student $student)
    {
        $this->user = $user;
        $this->student = $student;
    }

    public function saveDocument(UploadedFile $file){
        $extension = $file->getClientOriginalExtension();

        $user = $this->user;
        $student = $this->student;

        $fullname = sprintf("%s %s", $user->lastname, $user->firstname);
        $dateSubmitted = date('Y_F_d_H_i_s');
        $path = sprintf("\%u\%s\%s",$student->year_admitted, $student->course->name, $fullname);
        $filename = sprintf("%s_%s_%u_%s.%s",$dateSubmitted, $student->course->short_name, 
        $student->year_admitted, $fullname,$extension);
        $validFilePath = UrlConverter::converToValidUrl($path);
        $validFileName = UrlConverter::converToValidUrl($filename);
        return $file->storeAs($validFilePath, $validFileName, 'public');
    }
    
    public function createDocument($path, $docTypeId, 
                                 $withCopies){
        
        $studentId = $this->student->id;
        if($withCopies){
            $haveCopies = 1;
        }else{
            $haveCopies = 0;
        }
        return Document::create([
            "document_type_id"=> $docTypeId,
            "student_id"=> $studentId,
            "document_status_id"=> 3,
            "updated_by_id"=> $studentId,
            "file_path"=> $path,
            "url"=>Storage::disk('public')->url($path),
            "with_copies"=>  intval($haveCopies)
        ]);
    }

    public function updateChecklist($updatedDocuments, $note, $updated_by_id, $pdf_id){
        $invalidDocument = 0;
        $missingDocs = 0;
        $pendingDocs = 0;

        $submittedDocs = Document::with('document_type', 'document_status')
                                    ->where('student_id', $this->student->id)
                                    ->get();

        foreach($submittedDocs as $submittedDoc){
            //verified documents from current request
            foreach($updatedDocuments as $modifiedDocument){
                if($modifiedDocument["id"] == $submittedDoc->id){
                    $document = $submittedDoc;
                    //add its pdf id when it is verified or rejected, to signal that it is there
                    if($document->document_status_id != "1"){
                        $document->pdf_id = ($modifiedDocument["document_status_id"] == "1" || 
                        $modifiedDocument["document_status_id"] == "2") ? $pdf_id : null;
                    }
                    $document->document_status_id = $modifiedDocument["document_status_id"];
                    $document->with_copies = $modifiedDocument["with_copies"];
                    $document->updated_by_id = $updated_by_id;

                    $document->save();
                    $document->load('document_status');

                if($modifiedDocument["document_status_id"] == 2){
                    $invalidDocument++;
                }
                if($modifiedDocument["document_status_id"] == 3){
                    $pendingDocs++;
                }
                if($modifiedDocument["document_status_id"] == 5){
                    $missingDocs++;
                }
            }
        }
        
        }

        $submittedDocs = $submittedDocs->toArray();

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


        //if user has email, send an email
        if($this->user->email !== null){
            Mail::to($this->user->email, $this->user->firstname)
            ->send(new VerifiedDocuments($this->user, $submittedDocs, $message, $note));
        }

        if($missingDocs == 0 && $invalidDocument == 0 && $pendingDocs == 0){
            $this->student->student_status_id = 1;
            $this->student->save();
        }

        return $submittedDocs;
    }
}