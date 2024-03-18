<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\StudentDocumentController;
use App\Http\Controllers\SubmissionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifiedDocumentsController;

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

//reset/forgot password routes
Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset');

//logged in routes
Route::group(['middleware'=>['auth:sanctum','verified']], function(){
    Route::post('/me', [AuthController::class, 'me']);
    Route::resource('requests', RequestController::class);
        Route::resources([
            'students' => StudentController::class,
            'documents' => DocumentController::class,
            'requests' => RequestController::class,
            'users' => UserController::class,
            'pdfs' => PdfController::class
        ]);
   
    Route::post('/logout', [AuthController::class, 'logout']);

    //student documents
    Route::get('/submitted-documents/{id}', [DocumentController::class, 'getSubmittedDocuments']);
    Route::get('/unverified-documents/{id}', [DocumentController::class, 'getUnverifiedDocuments']);
    Route::post('/verify-documents/{id}/{updated_by_id}', [VerifiedDocumentsController::class, 'verify_documents']);
    Route::get('/complete-students', [StudentDocumentController::class, 'getCompleteStudentDocuments']);
    Route::get('/incomplete-students', [StudentDocumentController::class, 'getIncompleteStudentDocuments']);
    Route::get('/requests/search/{searchText}', [RequestController::class, 'search']);
    Route::get('/student-requests/{id}', [StudentController::class, 'getRequests']);
    Route::get('/student-pdfs/{id}', [StudentController::class, 'getPdfs']);
    Route::get('/students/search/{searchText}', [StudentController::class, 'search']);

    //uploading files/masterlist
    Route::post('/upload', [SubmissionController::class, 'upload']);
    Route::post('/add-to-masterlist', [SubmissionController::class, 'addToMasterlist']);

    //checklist or masterlist
    Route::put('/save-checklist/{id}', [DocumentController::class, 'editDocuments']);
    Route::post('/add-credentials/{studentId}',[SubmissionController::class, 'addCredentials']);
    
    //request sort routes
    Route::get('/oldest-request-first', [RequestController::class, 'oldestRequestsFirst']);
    Route::get('/not-reviewed-requests', [RequestController::class, 'notReviewedRequests']);
    Route::get('/reviewed-requests', [RequestController::class, 'reviewedRequests']);
    Route::get('/alphabetical-requests', [RequestController::class, 'alphabeticalRequests']);

    //student sort routes
    Route::get('/oldest-students-first', [StudentController::class, 'oldestStudentsFirst']);
    Route::get('/newest-students-first', [StudentController::class, 'newestStudentsFirst']);
    Route::get('/incomplete-students-first', [StudentController::class, 'incompleteStudentsFirst']);
    Route::get('/complete-students-first', [StudentController::class, 'completeStudentsFirst']);
    Route::get('/students-alphabetical', [StudentController::class, 'alphabeticalStudents']);

    //student route
    Route::get('/students/{year}/{courseId}', [StudentController::class, 'getStudentBySelected']);

    Route::post('/export-masterlist', [StudentDocumentController::class, 'exportStudentDocuments']);
    
});


