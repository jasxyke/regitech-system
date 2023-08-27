<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Request;
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
