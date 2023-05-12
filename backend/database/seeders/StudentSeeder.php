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
                        ->state(new Sequence(
                            ['course_id'=>'1'],
                            ['course_id'=>'2'],
                            ['course_id'=>'3'],
                            ['course_id'=>'4'],
                            ['course_id'=>'5'],
                            ['course_id'=>'6'],
                            ['course_id'=>'7'],
                            ['course_id'=>'8'],
                            ['course_id'=>'9'],
                        ))
                        ->state(new Sequence(
                            ['student_status_id'=>'1'],
                            ['student_status_id'=>'2'],
                            ['student_status_id'=>'3'],
                            ['student_status_id'=>'4'],
                        ))
                        ->state(new Sequence(
                            ['year_admitted'=>'2015'],
                            ['year_admitted'=>'2016'],
                            ['year_admitted'=>'2017'],
                            ['year_admitted'=>'2018'],
                            ['year_admitted'=>'2019'],
                            ['year_admitted'=>'2020'],
                            ['year_admitted'=>'2021'],
                            ['year_admitted'=>'2022'],
                            ['year_admitted'=>'2023'],
                        ))
                        ->create(['user_id'=>$user->id]);
            });
    }
}
