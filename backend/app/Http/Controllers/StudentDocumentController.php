<?php

namespace App\Http\Controllers;

use App\Exports\StudentDocumentsExport;
use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Student;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class StudentDocumentController extends Controller
{
    function getCompleteStudentDocuments(){
        $students = Student::with('user','student_status')
                        ->where('student_status_id','=','1')
                        ->orderBy('year_admitted','asc')
                        ->get();

        foreach($students as $student){
            $documents = Document::with('document_status', 'document_type')
                    ->where('student_id','=',$student->id)
                    ->orderBy('document_type_id', 'asc')
                    ->get();
                $student['documents'] = $documents;
        }

        return $students;
    }

    function getIncompleteStudentDocuments(){
        $students = Student::with('user','student_status')
                        ->where('student_status_id','=','2')
                        ->orderBy('year_admitted','asc')
                        ->get();

        foreach($students as $student){
            $documents = Document::with('document_status', 'document_type')
                    ->where('student_id','=',$student->id)
                    ->orderBy('document_type_id', 'asc')
                    ->get();
                $student['documents'] = $documents;
        }

        return $students;
    }

    function exportStudentDocuments(){
        return Excel::download(new StudentDocumentsExport, 'Student documents report.xlsx');
    }
}
