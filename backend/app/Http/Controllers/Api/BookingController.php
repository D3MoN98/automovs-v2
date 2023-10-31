<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Models\Booking;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookingRequest $request)
    {
        $data = $request->all();
        $user = User::where('email', $data['email'])->first();

        if (!$user) {
            $data['role_id'] = 2;
            $data['password'] = Hash::make(uniqid());

            $userRequest = new StoreUserRequest();
            $userRequest->setValidator(Validator::make($data, $userRequest->rules()));

            $userController = app(UserController::class);
            $user = $userController->store($userRequest);
        }

        $data['user_id'] = $user->id;
        $contact = new Booking($data);
        $contact->save();

        return response()->json(['status' => true, 'message' => 'New Booking created', 'data' => $contact]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
