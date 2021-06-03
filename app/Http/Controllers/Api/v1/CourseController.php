<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CourseController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => []]);
    }
    /**
     * Response all data
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        $courses = Course::all();
        foreach ($courses as $course) {
            $course->category;
            $course->software;
            $course->genre;
            $course->tutor;
        }
        return response()->json([
            'message' => 'success',
            'courses' => $courses
        ], 200);
    }

    /**
     * Response one data by id
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getById(Request $request, $courseId)
    {
        $course = Course::find($courseId);
        $course->category;
        $course->software;
        $course->genre;
        $course->tutor;
        $course->tutorials;
        return response()->json([
            'message' => 'success',
            'course' => $course,
        ], 200);
    }

    /**
     * Create new data
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        //
    }
}
