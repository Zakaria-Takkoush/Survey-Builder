<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //Add a question

    public function addQuestion(Request $request)
    {
        $question = new Question;
        $question->text = $request->text;
        $question->qtype_id = $request->qtype_id;
        $question->survey_id = $request->survey_id;
        $question->save();

        return response()->json([
            "status" => "Success",
            "question_added" => $question
        ], 200);
    }

    // Edit Question knowing its ID
    public function editQuestion($id, Request $request)
    {

        $question = Question::find($id);
        $question->text = $request->text;
        $question->qtype_id = $request->qtype_id;
        $question->save();

        return response()->json([
            "status" => "Success",
            "question_edited" => $question
        ], 200);
    }

    // Delete Question knowing its ID
    public function deleteQuestion($id)
    {

        $question = Question::find($id);
        $question->delete();

        return response()->json([
            "status" => "Success",
            "question_deleted" => $question
        ], 200);
    }
}
