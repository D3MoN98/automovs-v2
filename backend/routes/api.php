<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\ServiceTypeController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::middleware('guest')->group(function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');

    Route::post('forget-password', [AuthController::class, 'forgetPassword']);
    Route::put('reset-password', [AuthController::class, 'ResetPassword']);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::resource('service', ServiceController::class)->except(['index']);
    Route::resource('service-type', ServiceTypeController::class)->except(['index']);
});

Route::get('service', [ServiceController::class, 'index']);


Route::post('contact', [ContactController::class, 'store']);
Route::post('booking', [BookingController::class, 'store']);
