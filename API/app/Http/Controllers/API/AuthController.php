<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login (Request $request) {

        $credencials = $request->only('email', 'password');

        if (!auth()->attempt($credencials)) 
            abort(401, 'Invalid credencials');

        $token = auth()->user()->createToken('auth_token');

        return response()
            ->json([
                'data' => [
                    'token' => $token->plainTextToken
                ]
            ]);
    
    }

    public function logout() {
        
        if(method_exists(auth()->user()->currentAccessToken(), 'delete')) {
            auth()->user()->currentAccessToken()->delete();
        }
        
        auth()->guard('web')->logout();

        return response()
            ->json([], 204);

    }

}
