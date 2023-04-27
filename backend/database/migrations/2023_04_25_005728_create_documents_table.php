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
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedTinyInteger('document_type_id');
            $table->foreign('document_type_id')
            ->references('id')
            ->on('document_types')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->unsignedBigInteger('request_id');
            $table->foreign('request_id')
            ->references('id')
            ->on('requests')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreignId('student_id')
            ->constrained()
            ->cascadeOnUpdate()
            ->cascadeOnDelete();
            $table->unsignedTinyInteger('document_status_id');
            $table->foreign('document_status_id')
            ->references('id')
            ->on('document_statuses')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->unsignedBigInteger('updated_by');
            $table->foreign('updated_by')
            ->references('id')
            ->on('users')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->string('file_path', 255);
            $table->unsignedTinyInteger('with_copies');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
