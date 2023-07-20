<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

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
        $students = Student::with('user', 'course','student_status')
               ->orderBy('year_admitted', 'desc')
               ->orderBy('student_status_id','asc')
                // ->join('users', 'users.id', '=', 'students.user_id')
                // ->orderBy('users.lastname', 'asc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }

    public function search(string $searchText){

        $searchFunction = function(Builder $query) use($searchText){
            $query->where('firstname','like','%' . $searchText . '%')
            ->orWhere('lastname','like', '%' . $searchText . '%');
        };
        $students = Student::with('user', 'course','student_status')
                    ->whereHas('user',$searchFunction )
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }

    public function newestStudentsFirst(){
        //change to something more memory friendly later on
        $students = Student::with('user','course','student_status')
                ->orderBy('year_admitted','desc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }
    
    public function oldestStudentsFirst(){
        //change to something more memory friendly later on
        $students = Student::with('user','course','student_status')
                ->orderBy('year_admitted','asc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }

    public function incompleteStudentsFirst(){
        $students = Student::with('user','course','student_status')
                ->where('student_status_id', '2')
                ->orderBy('created_at','desc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }

    public function completeStudentsFirst(){
        $students = Student::with('user','course','student_status')
                ->where('student_status_id', '1')
                ->orderBy('created_at','desc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
    }

    public function alphabeticalStudents(){
        $students = Student::with('user','course','student_status')
                ->orderBy('user.lastname','asc')
                ->paginate(20);
        if(count($students) == 0){
            return null;
        }else{
            return $students;
        }
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
        $student = Student::with('user','course','student_status')->find($id);
        if($student != null){
            return $student;
        }else{
            return response()->json(['message'=>'User not found']);
        }
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
