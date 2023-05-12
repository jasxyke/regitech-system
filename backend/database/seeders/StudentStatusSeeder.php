<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('student_statuses')->insert([
            ['name'=>'Complete'],
            ['name'=>'Incomplete'],
            ['name'=>'Pull-out'],
            ['name'=>'Transferee'],
        ]
        );
    }
}
