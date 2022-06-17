<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Answer;

class AnswersController extends Controller
{
    //Submit Answer
    public function submitAnswer(Request $request){
        $answer = new Answer;
        $answer->value = $request->value;
        $answer->user_id = $request->user_id;
        $answer->survey_id = $request->survey_id;
        $answer->question_id = $request->question_id;
        $answer->save();

    return response()->json([
        'status' => "success",
        'answer_added' => $answer
    ],200);
    }
}
