<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Models\Request;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Type\Integer;

class DocumentController extends Controller
{
    //get all documents of a given request id
    public function getDocuments(string $id){
        Request::findOrFail($id);
        $requestDocuments = Document::with(['document_type', 'document_status', 'student.user'])
                ->where('request_id',$id)
                ->orderBy('document_type_id')
                ->get();

        return $requestDocuments;

    }

    public function getSubmittedDocuments(string $id){
        return Document::with('document_status', 'document_type')
                    ->where('student_id','=',$id)
                    ->orderBy('document_type_id')
                    ->get();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'yes';
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

        Storage::disk('public')->delete($document->file_path);

        $document->delete();

        return response()->json(["message"=> "Successfully deleted the document"]);
    }
}
