<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'is_reviewed'
    ];

    public function student(): BelongsTo {
        return $this->belongsTo(Student::class);
    }

    public function documents(): HasMany{
        return $this->hasMany(Document::class);
    }

    

}
