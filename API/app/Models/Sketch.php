<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sketch extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'img',
        'note',
    ];

}
