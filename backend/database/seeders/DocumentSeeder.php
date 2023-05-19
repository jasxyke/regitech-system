<?php

namespace Database\Seeders;

use App\Models\Document;
use App\Models\Request;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(15)
            ->create(['role_id'=>'4'])
            ->each(function ($user){
                Student::factory(1)
                    ->create(['user_id'=>$user->id,])
                    ->each(function ($student){
                        Request::factory(1)
                        ->create(['student_id'=>$student->id])
                        ->each(function ($request){
                            Document::factory(9)
                                ->create([
                                    'request_id'=>$request->id,
                                    'document_type_id'=>'1',//testing muna to
                                ]);
                    });
                });
            });
    }
}
