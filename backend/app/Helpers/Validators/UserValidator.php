<?php

namespace App\Helpers\Validators;

use Illuminate\Http\Request;

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
            'password'=>'required|string|confirmed|min:8',
            'lastname'=>'required|string|alpha|max:50',
            'firstname'=>'required|string|alpha|max:100',
            'midname'=>'required|string|alpha|max:50',
        ]);
        return $fields;
    }

    public static function validateUpdate(Request $request){
        $fields = $request->validate([
            'email'=>'required|string|email:rfc,dns|unique:users,email|max:255',
            'password'=>'required|string|confirmed|min:8',
            'lastname'=>'required|string|alpha|max:50',
            'firstname'=>'required|string|alpha|max:100',
            'midname'=>'required|string|alpha|max:50',
        ]);
        return $fields;
    }
}
    
