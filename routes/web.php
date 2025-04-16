<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/{any}', function () {
    return view('welcome'); // <- Twój główny widok z Vue
})->where('any', '.*');