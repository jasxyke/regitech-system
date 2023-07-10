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
            'with_copies'=>rand(0,1),
            'url'=> Storage::disk('public')->url('testdocument.jpg') ,
            'file_path'=>'testdocument.jpg',
            'updated_by_id'=>'2'
        ];
    }
}
