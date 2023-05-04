<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Students extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'course_id',
        'year_admitted',
        'student_status_id ',
    ];

    public function user(): HasOne
    {
        return $this->hasOne(User::class);
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
