<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\SketchesController;


Route::apiResource('/users', UserController::class)
    ->only('index', 'show');

Route::apiResource('/users', UserController::class)
    ->only('store', 'update', 'delete')
    ->middleware('auth:sanctum');

Route::apiResource('/sketches', SketchesController::class);

Route::prefix('auth')->group(function() {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])
        ->middleware('auth:sanctum');
});

Route::get('/', function () {
    return response()->json([
        'response' => true
    ]);
});

