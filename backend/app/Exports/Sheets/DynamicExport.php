<?php

namespace App\Exports\Sheets;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class DynamicExport implements FromArray, WithTitle, ShouldAutoSize, WithHeadings
{

    private $year;
    private $courses;
    private $documentColumns;
    private $studentColumns;

    public function __construct(int $year, $courses, 
    $documentColumns, $studentColumns)
    {
        $this->year  = $year;
        $this->courses = $courses;
        $this->documentColumns = $documentColumns;
        $this->studentColumns = $studentColumns;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function array(): array
    {
        $rows = [];


        $students = Student::with('user', 'course', 'documents', 
                            'documents.document_status')
                    ->where('year_admitted', '=', $this->year)
                    ->whereIn('course_id', $this->courses)
                    ->orderBy('course_id', 'asc')
                    ->get();

        foreach($students as $student){
            $row = [];
            foreach($this->studentColumns as $column){
                $name = $student->user[$column];
                array_push($row, $name);
            }
            array_push($row, $student->course['name']);

            foreach($this->documentColumns as $column){
                foreach($student->documents as $document){
                    if($document['document_type']['name'] == $column){
                        array_push($row, $document->document_status['name']);
                    }
                }
            }
            array_push($rows, $row);
        }

        return $rows;
    }

    public function headings(): array{
        $userInfoColumns = $this->studentColumns;
        $documentTypeColumns = $this->documentColumns;

        return array_merge($userInfoColumns, ['Course'], $documentTypeColumns);
    }
    

    /**
     * @return string
     */
    public function title(): string
    {
        return $this->year;
    }
}
