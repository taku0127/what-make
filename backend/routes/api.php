<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ProblemController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\UsersController;
use App\Models\Problem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('api.login.store');
Route::post('/register', [RegisterController::class, 'Register']);
Route::get('/top',[ProblemController::class, 'index']);
Route::get('/problem/{id}',[ProblemController::class, 'detail']);
Route::post('/problem/{id}/product',[ProblemController::class, 'storeProduct']);
Route::delete('/product/{id}',[ProblemController::class, 'deleteProduct']);
Route::patch('/product/{id}',[ProblemController::class, 'updateProduct']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/loggedin', [LoginController::class, 'loggedin'])->name('api.loggedin');
});
