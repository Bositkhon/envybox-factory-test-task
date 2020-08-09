<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{

    protected $table = 'feedbacks';

    protected $fillable = [
        'full_name',
        'phone',
        'content'
    ];

    public $timestamps = false;
}
