<?php

namespace App\Http\Controllers;

use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = UserValidator::validateSignup($request);

        $user = User::create([
            'email'=>$fields['email'],
            'password'=>bcrypt($fields['password']),
            'email'=>$fields['email'],
            'lastname'=>$fields['lastname'],
            'firstname'=>$fields['firstname'],
            'midname'=>$fields['midname'],
            'role_id'=>'4',
            'email_verified_at'=>now(),
            'remember_token'=>Str::random(10)
        ]);

        Student::create([
            'user_id'=>$user->id,
            'course_id'=>$request->input('course_id'),
            'year_admitted'=>$request->input('year_admitted'),
            'student_status_id'=>'2',
        ]);

        if($user->role_id == 1){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }
        else if($user->role_id == 2 || $user->role_id == 3){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }
        else if($user->role_id == 4){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }else{
            response()->json(['error' => 'Invalid credentials'], 401);
        }


        return response()->json(['token' => $token, 'role_id'=>$user->role_id], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = $request->user();
            if($user->role_id == 1){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }
        else if($user->role_id == 2 || $user->role_id == 3){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }
        else if($user->role_id == 4){
            $token = $user->createToken('regitechtoken');
            $token = $token->plainTextToken;
        }else{
            response()->json(['error' => 'Invalid credentials'], 401);
        }

            return response()->json(['token' => $token, 'role_id'=>$user->role_id], 200);
        }

        return response()->json(['error' => 'Invalid login'], 401);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }

    //return current user
    public function me(Request $request){
        $user = $request->user();
        if($user->role_id == 4){
            $id = $user->id;
            return Student::with(['user','course','student_status'])
                            ->where('user_id', '=', $id)
                            ->first();
        }
        return $user->load('role');
    }
}