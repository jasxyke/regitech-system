<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('document_types')->insert([
            ['name'=>'SAR Form'],
            ['name'=>'Form 138 Grade 10'],
            ['name'=>'Form 138 Grade 11'],
            ['name'=>'Form 138 Grade 12'],
            ['name'=>'PSA Birth Certificate'],
            ['name'=>'Certificate of Good Moral/Completion'],
            ['name'=>'Undertaking'],
            ['name'=>'Medical Information Sheet'],
            ['name'=>'Schoold ID SHS'],
            ['name'=>'2x2 Picture'],
            ['name'=>'Form 137 SHS'],
            ['name'=>'TOR Copy for PUP']
        ]
    );
}
}
