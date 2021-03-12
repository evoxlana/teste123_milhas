<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['prefix' => 'v1/'], function () {
    /*Routes Admin*/
    Route::group(['prefix' => 'admin', 'namespace' => 'Api\V1\Admin'], function () {
        
        
        /*flights*/
        Route::get('flights', 'FlightsController@index');

        /*Users*/
        Route::get('authenticated', 'UserController@authenticated');
        Route::get('user', 'UserController@index');
        
    });
});
