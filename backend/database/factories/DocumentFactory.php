<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
            //'file_path'=>$this->faker->image(storage_path('public/digitized_samples'), 200, 500, null, false),
            'file_path'=>'sample path muna',
            'document_status_id'=>rand(1,3),
            'updated_by_id'=>'2'
        ];
    }
}
