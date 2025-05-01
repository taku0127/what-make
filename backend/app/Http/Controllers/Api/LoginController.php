<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends BaseController
{
    //
    /**
     * returns default response.
     * route: get('/api/login')
     *
     * @return  \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        return $this->sendError(
            'Authentication Required.',
            [],
            401,
        );
    }

     /**
     * authenticate with credentials.
     * route: post('/api/login')
     *
     * @param   Request $request
     * @return  \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return new JsonResponse([
                'message' => 'Authenticated.',
            ]);;
        }

        return $this->sendError(
            'Login Failed',
            ['email' => 'The provided credentials do not match our records.'],
            401,
        );
    }

    /**
     * returns response after after login redirect.
     * route: get('/api/loggedin')
     *
     * @return  \Illuminate\Http\JsonResponse
     */
    public function loggedin()
    {
        return $this->sendResponse(
            'Logged in.',
            ['email' => 'Authenticated.'],
        );
    }
}
