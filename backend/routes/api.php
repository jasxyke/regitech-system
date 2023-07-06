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
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifiedDocumentsController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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
Route::post('/sign-up', [AuthController::class, 'register']);

Route::group(['middleware'=>['auth:sanctum','verified']], function(){
    Route::post('/me', [AuthController::class, 'me']);
    Route::resource('requests', RequestController::class);
        Route::post('/upload', [SubmissionController::class, 
        'upload']);
        Route::resources([
            'students' => StudentController::class,
            'documents' => DocumentController::class,
            'requests' => RequestController::class,
            'users' => UserController::class,
        ]);
        Route::get('/request-documents/{id}',
         [DocumentController::class, 'getDocuments']);
   
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/submitted-documents/{id}', [DocumentController::class, 'getSubmittedDocuments']);
    Route::post('/verify-documents/{id}', [VerifiedDocumentsController::class, 'verify_documents']);
    Route::post('/test-email', [VerifiedDocumentsController::class, 'testEmail']);
    

});
