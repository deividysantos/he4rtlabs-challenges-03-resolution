<?php

namespace Tests\Feature\app\Http\Controller;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{

    use RefreshDatabase;

    public function test_it_should_be_able_to_login()
    {
        $credentials = [
            'email' => 'test@example.com',
            'password' => 'password'
        ];

        User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('password')
        ]);

        $request = $this->post(route('login'), $credentials);

        $request->assertStatus(200);
        $request->assertJsonStructure([
            'message',
            'token'
        ]);
    }

    public function test_it_should_not_be_able_to_login_with_wrong_email()
    {
        $credentials = [
            'email' => 'test_example.com',
            'password' => 'password'
        ];

        User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('password')
        ]);

        $request = $this->withHeader('Accept', 'Apllication/json')->post(route('login'), $credentials);

        $request->assertStatus(422);
        $request->assertExactJson([
            'message' => 'The email must be a valid email address.',
            'errors' => [
                'email' => ['The email must be a valid email address.'],
            ]  
        ]);
    }
}
