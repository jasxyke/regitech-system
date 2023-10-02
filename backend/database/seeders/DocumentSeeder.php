<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\Pdf;
use App\Models\Request;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(100)
            ->create(['role_id'=>'4'])
            ->each(function ($user){
                Student::factory(1)
                    ->state([
                        'user_id'=>$user->id,
                        'student_status_id'=>'2'
                    ])
                    ->create()
                    ->each(function ($student){
                        $GLOBALS['incompleteStudent'] = $student;
                        Pdf::factory(1)
                                ->create([
                                    'student_id' => $student->id
                                ])
                            ->each(function ($pdf){
                                Request::factory(1)
                                ->create(['student_id'=>$pdf->student_id, 'pdf_id'=>$pdf->id])
                                ->each(function ($request){
                                    Document::factory(12)
                                    ->state(new Sequence(
                                        [
                                            'document_type_id'=>'1',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'2',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'3',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'4',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'5',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'6',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'7',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'8',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'9',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'10',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'11',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'12',
                                            'student_id'=>$GLOBALS['incompleteStudent']->id,
                                            'document_status_id'=>'3',
                                            'pdf_id'=>$request->id,
                                            'updated_by_id'=>$request->student_id
                                        ]
                                    ))
                                    ->create();
                                });
                        });
                            
                    });
                });

            $completeStudent = "";
            User::factory(15)
            ->create(['role_id'=>'4'])
            ->each(function ($user){
                Student::factory(1)
                    ->state([
                        'user_id'=>$user->id,
                        'student_status_id'=>'1'
                    ])
                    ->create()
                    ->each(function ($student){
                        $GLOBALS['completeStudent'] = $student;
                        Pdf::factory(1)
                                ->create([
                                    'student_id' => $student->id
                                ])
                        ->each(function ($pdf){
                            Request::factory(1)
                            ->create(['student_id'=>$pdf->student_id, 'pdf_id'=>$pdf->id])
                                ->each(function ($request){
                                    Document::factory(12)
                                    ->state(new Sequence(
                                        [
                                            'document_type_id'=>'1',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'2',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'3',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'4',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'5',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'6',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'7',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'8',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'9',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'10',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'11',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ],
                                        [
                                            'document_type_id'=>'12',
                                            'student_id'=>$GLOBALS['completeStudent']->id,
                                            'document_status_id'=>'1',
                                            'pdf_id'=>$request->pdf_id,
                                            'updated_by_id'=>$request->student_id
                                        ]
                                    ))
                                    ->create();
                                });
                    });
                            
                    });
                });

            }
        }
            
 