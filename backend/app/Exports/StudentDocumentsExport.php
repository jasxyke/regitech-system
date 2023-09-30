<?php

namespace App\Exports;

use App\Exports\Sheets\DynamicExport;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class StudentDocumentsExport implements WithMultipleSheets
{
    use Exportable;

    protected $sheetTitle;
    protected $yearSheets;
    protected $courseGroups;
    protected $documentColumns;
    protected $studentColumns;

    public function __construct(Array $years, Array $courses,
                     Array $documentColumns, Array $studentColumns)
    {
        $this->yearSheets = $years;
        $this->courseGroups = $courses;
        $this->documentColumns = $documentColumns;
        $this->studentColumns = $studentColumns;
    }

    public function sheets(): array
    {
        $sheets = [];

        foreach ($this->yearSheets as $yearSheetTitle){
            $sheets[] = new DynamicExport($yearSheetTitle, $this->courseGroups,
             $this->documentColumns, $this->studentColumns);
        }

        return $sheets;
    }
}
