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
        'student_id',
        'document_status_id',
        'updated_by_id',
        'with_copies',
        'student_id',
        'pdf_id'
    ];

    protected $with = ['updated_by'];

    public function pdf(): BelongsTo{
        return $this->belongsTo(Pdf::class);
    }

    public function document_type(): BelongsTo{
        return $this->belongsTo(DocumentType::class);
    }

    public function student(): BelongsTo{
        return $this->belongsTo(Student::class);
    }

    public function document_status(): BelongsTo{
        return $this->belongsTo(DocumentStatus::class);
    }

    public function updated_by(): BelongsTo{
        return $this->belongsTo(User::class, 'updated_by_id');
    }
}
 