<?php

namespace App\Http\Controllers;

use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::with('role')
                    ->where('role_id', '=', '2')
                    ->orWhere('role_id', '=', '3')
                    ->orderBy('created_at')
                    ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = UserValidator::validateCreateStaff($request);

        $user = User::create([
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'email'=>$fields['email'],
            'lastname'=>$fields['lastname'],
            'firstname'=>$fields['firstname'],
            'midname'=>$fields['midname'],
            'role_id'=>$request->input('role_id'),
            'email_verified_at'=>now(),
            'remember_token'=>Str::random(10)
        ]);

        return response()->json($user->load('role'), 201);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::with('role')->find($id);
        if($user != null){
            return $user;
        }else{
            return response()->json(['message'=>'User not found']);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::with('role')->find($id);

        $fields = UserValidator::validateUpdate($request);

        $user->update($fields);
        return $user;
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);
        if($user != null){
            $user->delete();
            return response()->json(['message'=>'Successfully Deleted']);
        }else{
            return response()->json(['message'=>'User not found']);
        }
        
    }

    
}
