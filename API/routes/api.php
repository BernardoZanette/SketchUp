<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SketchesController;

Route::apiResource('/users', UserController::class);
Route::apiResource('/sketches', SketchesController::class);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/', function () {
    return response()->json([
        'response' => true
    ]);
});

