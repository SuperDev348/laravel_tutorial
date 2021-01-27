<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->decimal('rate', 2, 2);
            $table->string('detail');
            $table->string('image');
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('genre_id')->constrained('genres');
            $table->foreignId('software_id')->constrained('software');
            $table->foreignId('tutor_id')->constrained('tutors');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
