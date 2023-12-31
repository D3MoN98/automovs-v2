<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{

    /**
     * login functionality
     *
     * @param Request $request
     * @return JSON
     */
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'), $request->remember_me)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid login details'
            ], 422);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'status' => 'success',
            'message' => 'Login successful',
            'data' => [
                'user' => $user,
                'auth_token' => $token,
                'token_type' => 'Bearer',
            ]
        ]);
    }

    /**
     * logout functionality
     *
     * @param Request $request
     * @return JSON
     */
    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();
        Auth::guard('web')->logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Logout successful',
        ]);
    }


    /**
     * forget password functionality
     *
     * @param Request $request
     * @return JSON
     */
    public function forgetPassword(Request $request)
    {
        try {
            $request->validate(['email' => 'required|email']);

            $status = Password::sendResetLink(
                $request->only('email')
            );

            return $status === Password::RESET_LINK_SENT
                ? response()->json(['status' => 'success', 'message' => __($status)])
                : response()->json(['status' => 'error', 'message' => __($status)], 422);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * reset password functionality
     *
     * @param Request $request
     * @return JSON
     */
    public function ResetPassword(Request $request)
    {
        try {
            $request->validate([
                'token' => 'required',
                'email' => 'required|email',
                'password' => 'required|min:6|confirmed',
            ]);

            $status = Password::reset(
                $request->only('email', 'password', 'password_confirmation', 'token'),
                function ($user, $password) {
                    $user->forceFill([
                        'password' => Hash::make($password)
                    ])->setRememberToken(Str::random(60));

                    $user->save();

                    event(new PasswordReset($user));
                }
            );

            return $status === Password::PASSWORD_RESET
                ? response()->json(['status' => 'success', 'message' => __($status)])
                : response()->json(['status' => 'error', 'message' => __($status)], 422);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
