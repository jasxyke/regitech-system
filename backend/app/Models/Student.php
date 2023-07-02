<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Student extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'user_id',
        'course_id',
        'year_admitted',
        'student_status_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function course(){
        return $this->belongsTo(Course::class);
    } 

    public function requests(){
        return $this->hasMany(Request::class);
    }

    public function student_status(){
        return $this->belongsTo(StudentStatus::class);
    }

    public function documents(){
        return $this->hasMany(Document::class);
    }
}
