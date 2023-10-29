<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    /**
     * Fetch auth user
     *
     * @param Request $request
     * @param string $id
     * @return void
     */
    public function index()
    {
        try {
            $user = Auth::user();

            return response()->json(['status' => 'success', 'data' => $user]);
        } catch (Exception $e) {
            return response()->json(['error' => $e], 500);
        }
    }


    /**
     * Update auth user
     *
     * @param Request $request
     * @param string $id
     * @return void
     */
    public function update(Request $request)
    {
        try {
            $id = Auth::id();
            $user = Auth::user();

            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($user->id)],
                'contact_no' => ['required', Rule::unique('users', 'contact_no')->ignore($user->id)],
            ], [
                'name.required' => 'Name field is required.',
                'email.required' => 'Email field is required.',
                'email.email' => 'Please proide an valid email address.',
                'contact_no.required' => 'Contact No field is required.',
            ]);


            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            User::findOrFail($user->id)->update($request->all());

            return response()->json(['status' => 'success', 'message' => 'Profile updated successfully', 'data' => $user->refresh()]);
        } catch (Exception $e) {
            return response()->json(['error' => $e], 500);
        }
    }
}
