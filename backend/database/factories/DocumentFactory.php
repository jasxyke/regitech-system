<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'with_copies'=>'0',
            'file_path'=> Storage::disk('public')->url('testdocument.jpg') ,
            'document_status_id'=>rand(1,3),
            'updated_by_id'=>'2'
        ];
    }
}
