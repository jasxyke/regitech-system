<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'email'=>'xykeljas23.jxc@gmail.com',
            'password'=>Hash::make('password'),
            'lastname'=>'Cortez',
            'firstname'=>'Jaspher Xyke',
            'midname'=>'Mendones',
            'role_id'=>'4',
            'email_verified_at'=>now(),
            'remember_token' => Str::random(10),

        ]);
        Student::create([
            'user_id'=>$user->id,
            'course_id'=>'1',
            'year_admitted'=>'2020',
            'student_status_id'=>'2',
        ]);

        User::factory(40)
            ->create(['role_id'=>'4'])
            ->each(function ($user){
                Student::factory(1)
                        ->create(['user_id'=>$user->id]);
            });
    }
}
