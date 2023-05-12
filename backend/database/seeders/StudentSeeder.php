<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(40)
            ->create(['role_id'=>'4'])
            ->each(function ($user){
                Student::factory(1)
                        ->state(['course_id'=>rand(1,9)])
                        ->state(['student_status_id'=>rand(1,4)])
                        ->state(['year_admitted'=>rand(2015,2023)])
                        ->create(['user_id'=>$user->id]);
            });
    }
}
