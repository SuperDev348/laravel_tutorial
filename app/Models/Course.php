<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Course extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'title',
    //     'rate',
    //     'detail',
    // ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function software()
    {
        return $this->belongsTo(Software::class);
    }

    public function tutor()
    {
        return $this->belongsTo(Tutor::class);
    }

    public function tutorials()
    {
        return $this->hasMany(Tutorial::class);
    }
}
