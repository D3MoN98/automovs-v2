<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $service = parent::toArray($request);
        $service['created_at'] = $this->created_at->format('d-m-y h:i a');
        $service['updated_at'] =  Carbon::parse($this->updated_at)->diffForHumans();
        return $service;
    }
}
