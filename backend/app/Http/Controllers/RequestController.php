<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Request as ModelsRequest;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $requests = ModelsRequest::with('student.user')
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        return $requests;
    }

    public function search(string $searchText){

        $searchFunction = function(Builder $query) use($searchText){
            $query->where('firstname','like','%' . $searchText . '%')
            ->orWhere('lastname','like', '%' . $searchText . '%');
        };
        $requests = ModelsRequest::with('student.user')
                    ->whereHas('student.user',$searchFunction )
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        return $requests;
    }

    public function oldestRequestsFirst(){
        $requests = ModelsRequest::with('student.user')
                    ->orderBy('created_at', 'asc')
                    ->paginate(20);
        return $requests;
    }

    public function notReviewedRequests(){
        $requests = ModelsRequest::with('student.user')
                    ->where('is_reviewed', '=', '0')
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        return $requests;
    }

    public function reviewedRequests(){
        $requests = ModelsRequest::with('student.user')
                    ->where('is_reviewed', '=', '1')
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        return $requests;
    }

    public function alphabeticalRequests(){
        $requests = ModelsRequest::with('student.user')
                    ->orderBy('student.user.firstname', 'desc')
                    ->paginate(20);
        return $requests;
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
        $request = ModelsRequest::with('student.user', 'student.course', 'student.student_status','pdf')
                    ->findOrFail($id);
        return $request; 
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
