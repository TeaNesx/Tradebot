<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\User\DashboardController as UserDashboardController;

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

// Authentication Routes
Route::prefix('auth')->group(function () {
    Route::post('/login', [LoginController::class, 'apiLogin']);
    Route::post('/logout', [LoginController::class, 'apiLogout']);
    Route::middleware('auth:sanctum')->get('/user', [LoginController::class, 'getAuthenticatedUser']);
});

// Admin Routes
Route::prefix('admin')->middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index']);
    Route::get('/users', [AdminDashboardController::class, 'getUsers']);
});

// User Routes
Route::prefix('user')->middleware(['auth:sanctum', 'user'])->group(function () {
    Route::get('/dashboard', [UserDashboardController::class, 'index']);
    Route::get('/profile', [UserDashboardController::class, 'getProfile']);
});
