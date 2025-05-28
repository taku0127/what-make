<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    use HasFactory;

    protected $fillable = ['url','user_id','problem_id'];
    public function problem(){
        return $this->belongsTo(Problem::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
