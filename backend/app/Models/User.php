<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Mail\PasswordResetNotification;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, CanResetPassword;

    public function sendPasswordResetNotification($token)
    {
        Mail::to($this->email, $this->firstname . ' ' . $this->lastname)
            ->send(new PasswordResetNotification(
                $this->firstname . ' ' . $this->lastname,
                url(env('WEB_APP_URL').'/reset-password'.'?token='.$token . '&email=' . $this->email)));
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'lastname',
        'firstname',
        'midname',
        'role_id',
        'email',
        'password',
        'email_verified_at',
        'remember_token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function student(): HasOne{
        return $this->hasOne(Student::class);
    }

    public function verifiedDocuments(): HasMany{
        return $this->hasMany(Document::class, 'updated_by_id');
    }

    public function role(): BelongsTo{
        return $this->belongsTo(Role::class);
    }


}
