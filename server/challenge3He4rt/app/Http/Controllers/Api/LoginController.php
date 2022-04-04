<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        if(!Auth::attempt($request->only(['email', 'password'])) )
            return response()->json([
                'error' => 'Wrong credentials'
            ], 422);

        $token = Auth::user()->createToken('access');

        return response()->json([
            'message' => 'success',
            'token' => $token->plainTextToken
        ]);
    }

    public function logout(): JsonResponse
    {
        Auth::user()->currentAccessToken()->delete();

        return response()->json([], 204);
    }
}
