<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

Route::apiResource('/users', UserController::class);
Route::apiResource('/sketches', SketchesController::class);
// Route::delete('users/{id}', [UserController::class, 'destroy']);
// Route::patch('users/{id}', [UserController::class, 'update']);
// Route::get('/users/{id}', [UserController::class, 'show']);
// Route::get('/users', [UserController::class, 'index']);
// Route::post('/users', [UserController::class, 'store']);

Route::get('/', function () {
    return response()->json([
        'success' => true
    ]);
});

