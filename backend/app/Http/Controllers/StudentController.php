<?php

namespace App\Http\Controllers;

use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Models\Pdf;
use App\Models\Request as ModelsRequest;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function getRequests(string $id){
        return ModelsRequest::with('pdf')
                ->where('student_id','=',$id)
                ->orderBy('created_at', 'desc')            
                ->get();
    }

    public function getPdfs(string $id){
        return Pdf::with('documents','documents.document_type')
                ->where('student_id','=',$id)
                ->orderBy('created_at', 'desc')
                ->get();
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $students = Student::with(['user', 'course','student_status'])
        //        ->orderBy('year_admitted', 'desc')
        //         ->paginate(20);

        $students = User::with(['student', 'student.course', 'student.student_status'])
                        ->where('role_id','=','4')
                        ->orderBy('lastname', 'asc')
                        ->paginate(20);
            return $students;
    }

    public function search(string $searchText){

        // $searchFunction = function(Builder $query) use($searchText){
        //     $query->where('firstname','like','%' . $searchText . '%')
        //     ->orWhere('lastname','like', '%' . $searchText . '%');
        // };
        // $students = Student::with('user', 'course','student_status')
        //             ->whereHas('user',$searchFunction )
        //             ->orderBy('created_at', 'desc')
        //             ->paginate(20);
        $students = User::with('student', 'student.course', 'student.student_status')
                        ->where('role_id','=','4')
                        ->where(function (Builder $query) use ($searchText){
                            $query->where('firstname','like','%' . $searchText . '%')
                            ->orWhere('lastname','like', '%' . $searchText . '%');
                        })
                        ->orderBy('lastname', 'asc')
                        ->paginate(20);
            return $students;
    }

    public function newestStudentsFirst(){
        //change to something more memory friendly later on
        // $students = Student::with('user','course','student_status')
        //         ->orderBy('year_admitted','desc')
        //         ->paginate(20);

        $students = User::with('student','student.course','student.status_status')
                        ->where('role_id', '=', '4')
                        ->orderBy('student.year_admitted')
                        ->orderBy('lastname', 'asc')
                        ->paginate(20);
            return $students;
    }
    
    public function oldestStudentsFirst(){
        //change to something more memory friendly later on
        $students = Student::with('user','course','student_status')
                ->orderBy('year_admitted','asc')
                ->paginate(20);
        $students = User::with('student','student.course','student.student_status')
                        ->where('role_id', '=', '4')
                        ->orderBy('student.year_admitted')
                        ->orderBy('lastname', 'asc')
                        ->paginate(20);   
            return $students;
    }

    public function incompleteStudentsFirst(){
        $students = Student::with('user','course','student_status')
                ->where('student_status_id', '2')
                ->orderBy('created_at','desc')
                ->paginate(20);
            return $students;
    }

    public function completeStudentsFirst(){
        $students = Student::with('user','course','student_status')
                ->where('student_status_id', '1')
                ->orderBy('created_at','desc')
                ->paginate(20);
            return $students;
    }

    public function alphabeticalStudents(){
        $students = Student::with('user','course','student_status')
                ->orderBy('user.lastname','asc')
                ->paginate(20);
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
        $student = Student::findOrFail($id);
        $studentUser = User::findOrFail($student->user_id);

        $userFields = UserValidator::validateUpdate($request);

        $isTransferee = $request->input('transferee');

        $studentUser->email = $request->input('email');
        $studentUser->firstname = $request->input('firstname');
        $studentUser->midname = $request->input('midname');
        $studentUser->lastname = $request->input('lastname');
        $studentUser->save();
        
        $student->course_id = $request->input('course_id');
        $student->year_admitted = $request->input('year_admitted');
        $student->student_status_id = $isTransferee ? "4" : "2";
        $student->save();

        //load user
        $student = $student->load('user','course','student_status');

        return response()->json(['message'=>'Student profile successfully updated!',
                                'student'=>$student]);
                                

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
