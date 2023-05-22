<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\DocumentStatusController;
use App\Http\Controllers\DocumentTypeController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentStatusController;
use App\Http\Controllers\UserController;
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
Route::post('/sign-up', [AuthController::class, 'register']);
Route::resource('courses', CourseController::class);

Route::group(['middleware'=>['auth:sanctum']], function(){
    Route::post('/me', [AuthController::class, 'me']);
    Route::resources([
        'documents'=> DocumentController::class,
        'document_statuses'=> DocumentStatusController::class,
        'document_types'=> DocumentTypeController::class,
        'requests'=> RequestController::class,
        'roles'=> RoleController::class,
        'students'=> StudentController::class,
        'student_statuses'=> StudentStatusController::class,
        'users'=> UserController::class,
    ]);
    Route::post('/logout', [AuthController::class, 'logout']);

});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
