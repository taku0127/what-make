<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ProblemController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('api.login.store');
Route::post('/register', [RegisterController::class, 'Register']);
Route::get('/top',[ProblemController::class, 'index']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/loggedin', [LoginController::class, 'loggedin'])->name('api.loggedin');
});
