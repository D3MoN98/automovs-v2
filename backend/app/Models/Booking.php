<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'service_id',
        'preferred_date',
        'preferred_time',
        'address',
        'extra_detail',
        'status'
    ];


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'preferred_date' => 'date',
        'preferred_time' => 'timestamp',
        'status' => 'enum:pending.confirmed.cancelled.completed.in_progress.no_show.expired.refunded.on_hold.rejected'
    ];
}
