<?php

namespace App\Http\Controllers;

use App\Helpers\Validators\UserValidator;
use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


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
                    ->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //for head registrar store, wait lang di ko pa prio to
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        User::with('role')->find($id);
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::destroy($id);
    }

    
}
