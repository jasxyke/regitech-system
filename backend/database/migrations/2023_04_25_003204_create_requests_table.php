<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')
            ->constrained()
            ->cascadeOnUpdate()
            ->cascadeOnDelete();
            $table->foreignId('pdf_id')
            ->nullable()
            ->constrained()
            ->cascadeOnUpdate()
            ->nullOnDelete();
            $table->unsignedTinyInteger('is_reviewed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('requests');
        Schema::enableForeignKeyConstraints();
    }
};
