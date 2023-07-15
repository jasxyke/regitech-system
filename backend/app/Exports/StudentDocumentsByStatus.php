<?php

namespace App\Exports;

use App\Helpers\Constants;
use App\Models\Document;
use App\Models\DocumentStatus;
use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StudentDocumentsByStatus implements FromArray, WithTitle, ShouldAutoSize, WithHeadings
{
    protected $documentStatus;

    public function __construct(string $documentStatus)
    {
        $this->documentStatus = $documentStatus;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function array(): array
    {
        $DOCUMENT_TYPES = Constants::DOCUMENT_TYPES;
        if($this->documentStatus == "complete"){
            $rows = [];
            $students = Student::with('user','student_status', 'course')
                        ->where('student_status_id','=','1')
                        ->orderBy('year_admitted','asc')
                        ->get();
            
        foreach($students as $student){
            $fullname = $student->user['lastname'] . ', ' . $student->user['firstname'] . ' ' . $student->user['midname'];
            $data = array($fullname, $student->year_admitted, $student->course['name']);
            $documents = Document::with('document_status', 'document_type')
                    ->where('student_id','=',$student->id)
                    ->orderBy('document_type_id', 'asc')
                    ->get();
            foreach($DOCUMENT_TYPES as $type){
                foreach($documents as $document){
                    if($document->document_type['name'] == $type['name']){
                        if($document->with_copies == 1){
                            array_push($data, $document->document_status['name'] . ', with copies');
                        }else{
                            array_push($data, $document->document_status['name']);
                        }
                    }
                }
            }
            
            array_push($rows, $data);
        }

        return $rows;
        }
        if($this->documentStatus == "incomplete"){
            $rows = [];
            $students = Student::with('user','student_status', 'course')
                        ->where('student_status_id','=','2')
                        ->orderBy('year_admitted','asc')
                        ->get();
            
        foreach($students as $student){
            $fullname = $student->user['lastname'] . ', ' . $student->user['firstname'] . ' ' . $student->user['midname'];
            $data = array($fullname, $student->year_admitted, $student->course['name']);
            $documents = Document::with('document_status', 'document_type')
                    ->where('student_id','=',$student->id)
                    ->orderBy('document_type_id', 'asc')
                    ->get();
            foreach($DOCUMENT_TYPES as $type){
                foreach($documents as $document){
                    if($document->document_type['name'] == $type['name']){
                        if($document->with_copies == 1){
                            array_push($data, $document->document_status['name'] . ', with copies');
                        }else{
                            array_push($data, $document->document_status['name']);
                        }
                    }
                }
            }
            
            array_push($rows, $data);
        }
        return $rows;
    }
}

    public function title(): string{
        return $this->documentStatus;
    }

    public function headings(): array
    {
        $documentTypes = array_column(Constants::DOCUMENT_TYPES, 'name');

        return array_merge(['Full name', 'Year admitted', 'Course'], $documentTypes);
    }
}
