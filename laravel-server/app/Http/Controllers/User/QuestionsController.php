<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\QType;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    //Display Questions belonging to a survey (pass the survey id)

    public function diaplayQuestions($survey_id){
        // $questions = Question::with("qtype")->get();
        $questions = Question::where("survey_id", $survey_id)->
        join("qtypes", "qtypes.id","=","questions.qtype_id")
        ->get(["questions.*", "qtypes.name as question_type"]);

        return response()->json([
            "status" => "Success",
            "questions" => $questions
        ], 200);
    }

    public function getTypes() {
        $types = Qtype::all();

        return response()->json([
            'status' => "success",
            'question_types' => $types
        ],200);
    }
}
