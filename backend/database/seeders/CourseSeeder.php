<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('courses')->insert([
            [
                'name'=>'Diploma in Civil Engineering Technology (DCvET)',
                'short_name'=>'DCvET',
            ],
            [
                'name'=>'Diploma in Computer Engineering Technology (DCET)',
                'short_name'=>'DCET',
            ],
            [
                'name'=>'Diploma in Electrical Engineering Technology (DEET)',
                'short_name'=>'DEET',
            ],
            [
                'name'=>'Diploma in Electronics Engineering Technology (DECET)',
                'short_name'=>'DECET',
            ],
            [
                'name'=>'Diploma in Information Communication Technology (DICT)',
                'short_name'=>'DICT',
            ],  
            [
                'name'=>'Diploma in Information Technology (DIT)',
                'short_name'=>'DIT',
            ],
            [
                'name'=>'Diploma in Mechanical Engineering Technology (DMET)',
                'short_name'=>'DMET',
            ],
            [
                'name'=>'Diploma in Office Management Technology (DOMT)',
                'short_name'=>'DOMT',
            ],
            [
                'name'=>'Diploma in Railway Engineering Technology (DRET)',
                'short_name'=>'DRET',
            ],
            [
                'name'=>'Diploma in Computer Engineering Technology (DCPET)',
                'short_name'=>'DCPET'
            ]
        ]
            );//di pako sure sa ibang name since may rename daw na naganap
    }
}
