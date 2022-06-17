<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\QyestionController;
use App\Http\Controllers\Admin\SurveyController;
use App\Http\Controllers\User\AnswersController;
use App\Http\Controllers\User\QuestionsController;
use App\Http\Controllers\User\SurveysController;


Route::group(['prefix' => 'v1'], function(){
    // Route::group(['prefix' => 'user'], function(){
    //     Route::get('/all_users/{id?}', [UserController::class, 'getAllUsers']);
    //     Route::post('/register/{user_type_id}', [UserController::class, 'signUp']);
    // });
});