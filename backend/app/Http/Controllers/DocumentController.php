<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Type\Integer;

class DocumentController extends Controller
{

    public function getSubmittedDocuments(string $id){
        return Document::with('document_status', 'document_type')
                    ->where('student_id','=',$id)
                    ->orderBy('document_type_id')
                    ->get();
    }

    public function getUnverifiedDocuments(string $id){
        return Document::with('document_status', 'document_type')
                ->where('student_id','=',$id)
                ->whereNot('document_status_id', '=', '1')
                ->orderBy('document_type_id')
                ->get();
    }

    public function editDocuments(Request $request, string $id){
        $student = Student::findOrfail($id);
        $staff = $request->user();

        $checkList = $request->input('checklist');
        $invalidDocument = 0;
        $missingDocs = 0;
        $pendingDocs = 0;

        $submittedDocs = Document::with('document_type', 'document_status')
                        ->where('student_id', $student->id)
                        ->get();

        foreach($submittedDocs as $submittedDoc){
            //verified documents from current request
            foreach($checkList as $documentsChecklist){
                if($checkList["id"] == $submittedDoc->id){
                    $document = $submittedDoc;
                    $document->document_status_id = $documentsChecklist["document_status_id"];
                    $document->with_copies = $documentsChecklist["with_copies"];
                    $document->updated_by_id = $staff->id;

                    $document->save();
                    $document->load('document_status');

                    if($checkList["document_status_id"] == 2){
                        $invalidDocument++;
                    }
                    if($checkList["document_status_id"] == 3){
                        $pendingDocs++;
                    }
                    if($checkList["document_status_id"] == 5){
                        $missingDocs++;
                    }
                }
            }
        }
        if($missingDocs == 0 && $invalidDocument == 0 && $pendingDocs == 0){
            $student->student_status_id = 1;
            $student->save();
        }

        return response()->json(["message"=>"Checklist saved"]);
        
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'WAIT';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $document = Document::findOrfail($id);
        $request = $document->request;

        Storage::disk('public')->delete($document->file_path);

        $document->delete();

        if(count($request->documents) == 0){
            $request->delete();
        }

        return response()->json(["message"=> "Successfully deleted the document"]);
    }
}
