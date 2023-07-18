<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use UserValidator;

class StudentController extends Controller
{

    public function getPdfs(string $id){
        return ModelsRequest::where('student_id','=',$id)
                ->orderBy('created_at', 'desc')            
                ->get();
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //change to something more memory friendly later on
        $students = Student::with('user','course','student_status')
                ->paginate(10);
        return $students;
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
        return Student::with('user')->where('id', '=', $id);
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
        $student = Student::find($id);
        if($student != null){
            $student->delete();
            return response()->json(['message'=>'Successfully Deleted']);
        }else{
            return response()->json(['message'=>'User not found']);
        }
    }
}
