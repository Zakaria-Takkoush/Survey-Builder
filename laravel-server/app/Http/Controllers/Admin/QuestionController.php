<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //Add a question

    public function addQuestion(Request $request){
        $question = new Question;
        $question->text = $request->text;
        $question->qtype_id = $request->qtype_id;
        $question->survey_id = $request->survey_id;
        $question->save();
        
        return response()->json([
            "status" => "Success",
            "category" => $question
        ], 200);
    }
}

