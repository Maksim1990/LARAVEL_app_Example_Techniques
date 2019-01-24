<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/alpha', function () {
    Log::info('User failed to login.', ['id' => 1]);
    abort(401);
    return view('alpha');
})->name('alpha');

Route::get('/beta', function () {
    return view('beta');
})->name("beta");

Route::get('/login/{id}', function () {
    return view('beta');
})->name("test");
