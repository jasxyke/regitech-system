<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Document extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'document_type_id',
        'request_id',
        'student_id',
        'document_status_id',
        'updated_by',
        'file_path',
        'with_copies',
    ];

    public function document_type(): BelongsTo{
        return $this->belongsTo(DocumentType::class);
    }

    public function request(): BelongsTo{
        return $this->belongsTo(Request::class);
    }

    public function student(): BelongsTo{
        return $this->belongsTo(Student::class);
    }

    public function document_status(): BelongsTo{
        return $this->belongsTo(DocumentStatus::class);
    }
}
 