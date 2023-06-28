<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;
use Ramsey\Uuid\Type\Integer;

class DocumentController extends Controller
{
    //get all documents of a given request id
    public function documents(string $id){
        Request::findOrFail($id);
        $requestDocuments = Document::with(['document_type', 'document_status'])
                ->where('request_id',$id)
                ->orderBy('document_type_id')
                ->get();

        return response()->json( $requestDocuments);

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
        //
    }
}
