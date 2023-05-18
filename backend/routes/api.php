<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//login route
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/signup', [AuthController::class, 'register']);
Route::resource('courses', CourseController::class);

Route::group(['middleware'=>['auth:sanctum']], function(){
    Route::post('/me', [AuthController::class, 'me']);
    Route::resources([
        'documents'=> DocumentsController::class,
        'document_statuses'=> DocumentStatusController::class,
        'document_types'=> DocumentTypesController::class,
        'requests'=> RequestController::class,
        'roles'=> RoleController::class,
        'students'=> StudentController::class,
        'student_statuses'=> StudentStatusController::class,
        'users'=> UserController::class,
    ]);
    
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
