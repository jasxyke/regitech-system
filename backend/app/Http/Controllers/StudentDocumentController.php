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

    function exportStudentDocuments(Request $request){

        $years = $request->input('years');
        $courses = $request->input('courses');
        $documents = $request->input('documents');
        $studentColumns = $request->input('studentColumns');

        return Excel::download(new StudentDocumentsExport($years, $courses, 
        $documents, $studentColumns), 'Student documents report.xlsx');

        
    }
}
