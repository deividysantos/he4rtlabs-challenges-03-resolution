<?php

namespace Tests\Feature\app\Http\Controller;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegisterControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_it_should_be_able_to_register_an_user()
    {
        $payload = [
            'email' => 'test@example.com',
            'password' => 'password'
        ];

        $request = $this->post(route('register'), $payload);

        $request->assertStatus(201);

        $request->assertJsonStructure([
           'message',
            'data' => [
                'email',
                'id',
            ]
        ]);

        $this->assertDatabaseHas('users',[
            'email' => 'test@example.com'
        ]);
    }

    public function test_it_should_not_able_to_register_with_repeated_email()
    {
        User::factory()->create(['email' => 'test@example.com']);

        $payload = [
            'email' => 'test@example.com',
            'password' => 'password'
        ];

        $request = $this->post(route('register'), $payload);

        $request->assertStatus(302);
    }

    public  function test_it_should_not_able_to_register_with_small_password()
    {
        $payload = [
            'email' => 'test@example.com',
            'password' => 'pass'
        ];

        $request = $this->post(route('register'), $payload);

        $request->assertStatus(302);
    }
}
