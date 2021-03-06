<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    //Add a survey

    public function addSurvey(Request $request)
    {
        $survey = new Survey;
        $survey->name = $request->name;
        $survey->save();

        return response()->json([
            "status" => "Success",
            "survey" => $survey
        ], 200);
    }

    public function getSurvey($id)
    {
        $survey = Survey::find($id);

        return response()->json([
            "status" => "Success",
            "survey" => $survey
        ], 200);
    }
}
