<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pdf extends Model
{
    use HasFactory;

    protected $fillable = [
        'file_path',
        'url',
        'student_id'
    ];

    public function student(): BelongsTo {
        return $this->belongsTo(Student::class);
    }

    public function documents(): HasMany{
        return $this->hasMany(Document::class);
    }

    public function request(): HasOne{
        return $this->hasOne(Request::class);
    }

}
