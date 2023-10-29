<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ServiceTypeRequest;
use App\Http\Resources\ServiceTypeResource;
use App\Models\ServiceType;
use Illuminate\Http\Request;

class ServiceTypeController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ServiceTypeResource::collection(ServiceType::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ServiceTypeRequest $request)
    {
        $service_type = new ServiceType($request->validated());
        $service_type->save();

        return new ServiceTypeResource($service_type);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new ServiceTypeResource(ServiceType::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ServiceTypeRequest $request, string $id)
    {
        $service_type = ServiceType::findOrFail($id);
        $service_type->update($request->validated());

        return new ServiceTypeResource($service_type);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service_type = ServiceType::findOrFail($id);
        $service_type->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Service type deleted successfully',
        ]);
    }
}
