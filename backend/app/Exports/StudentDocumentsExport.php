<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;


class StudentDocumentsExport implements WithMultipleSheets
{
    use Exportable;

    protected $sheetTitle;

    public function sheets(): array
    {
        $sheets = [];
        $documenStatuses = ["complete", "incomplete"];
        foreach($documenStatuses as $documentStatus){
            $sheets[] = new StudentDocumentsByStatus($documentStatus);
        }

        return $sheets;
    }
}
