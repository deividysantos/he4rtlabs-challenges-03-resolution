<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request, User $user): JsonResponse
    {
        $request['password'] = Hash::make($request['password']);

        if(! $user = $user->create($request->only(['email', 'password'])))
            response('try later', 500);

        return response()->json([
            'message' => 'success',
            'data' => [
                'email' => $user->email,
                'id' => $user->id
            ]
        ], 201);

    }
}
