<?php

namespace App\Helpers\Validators;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class UserValidator{

    public static function validateLogin(Request $request, ){
        $fields = $request->validate([
            'email'=>'required|string|email:rfc,dns',
            'password'=>'required|string'
        ]);
        return $fields;
    }

    public static function validateSignup(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email:rfc,dns|unique:users,email|max:255',
            'password'=>['required', 'confirmed', 
            Password::min(8)
                    ->letters()
                    ->numbers()
            ],
            'lastname'=>'required|string|max:50',
            'firstname'=>'required|string|max:100',
            'midname'=>'string|max:50|nullable',
        ]);
        return $fields;
    }

    public static function validateUpdate(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email:rfc,dns|max:255',
            'lastname'=>'required|string|max:50',
            'firstname'=>'required|string|max:100',
            'midname'=>'string|max:50|nullable',
        ]);
        return $fields;
    }

    public static function validateCreateStaff(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email:rfc,dns|unique:users,email|max:255',
            'password'=>['required', 'confirmed', 
            Password::min(8)
                    ->letters()
                    ->numbers()
            ],
            'lastname'=>'required|string|max:50',
            'firstname'=>'required|string|max:100',
            'midname'=>'string|max:50|nullable',
        ]);
        return $fields;
    }
}
    
