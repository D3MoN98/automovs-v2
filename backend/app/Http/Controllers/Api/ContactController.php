<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\UserController;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
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
    public function store(StoreContactRequest $request)
    {
        $data = $request->validated();
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
        $contact = new Contact($data);
        $contact->save();

        return response()->json(['status' => true, 'message' => 'New contact created', 'data' => $contact]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
