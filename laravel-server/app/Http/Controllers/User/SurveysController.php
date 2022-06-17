<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveysController extends Controller
{
    // Display Surveys

    public function getSurveys()
    {
        $surveys = Survey::all();

        return response()->json([
            "status" => "Success",
            "surveys" => $surveys
        ], 200);
    } 
}
