<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //insert types and statuses first

        $this->call([
            RoleSeeder::class,
            CourseSeeder::class,
            DocumentStatusSeeder::class,
            DocumentTypeSeeder::class,
            StudentStatusSeeder::class,
        ]);

        User::create([
            'email'=> ENV('HEAD_EMAIL'),
            'password'=>Hash::make(ENV('HEAD_PASSWORD')),
            'lastname'=>ENV('HEAD_LASTNAME'),
            'firstname'=>ENV('HEAD_FIRSTNAME'),
            'midname'=>ENV('HEAD_MIDNAME'),
            'role_id'=>'1',
            'email_verified_at'=>now(),
            'remember_token' => Str::random(10),
        ]);
        
        $this->call([
            UserSeeder::class,
            StudentSeeder::class,
            DocumentSeeder::class,
        ]);

    }
}
