<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\QuestionController;
use App\Http\Controllers\Admin\SurveyController;
use App\Http\Controllers\User\AnswersController;
use App\Http\Controllers\User\QuestionsController;
use App\Http\Controllers\User\SurveysController;
use App\Http\Controllers\JWTController;


Route::group(['prefix' => 'v1'], function(){
    // Route::group(['prefix' => 'user'], function(){
    //     Route::get('/all_users/{id?}', [UserController::class, 'getAllUsers']);
    //     Route::post('/register/{user_type_id}', [UserController::class, 'signUp']);
    // });

    Route::group(['middleware' => 'api'], function($router) {
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
        Route::post('/logout', [JWTController::class, 'logout']);
        Route::post('/refresh', [JWTController::class, 'refresh']);
        Route::post('/profile', [JWTController::class, 'profile']);
    });

    Route::post('/add_survey', [SurveyController::class, 'addSurvey']);
    Route::post('/add_question', [QuestionController::class, 'addQuestion']);
    Route::post('/edit_question/{id}', [QuestionController::class, 'editQuestion']);
    Route::post('/delete_question/{id}', [QuestionController::class, 'deleteQuestion']);

    Route::get('/diaplay_questions/{id}', [QuestionsController::class, 'diaplayQuestions']);

    Route::get('/diaplay_surveys', [SurveysController::class, 'getSurveys']);

});
