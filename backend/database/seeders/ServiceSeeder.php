<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            ['name' => 'Service 1'],
            ['name' => 'Service 2'],
            ['name' => 'Service 3'],
            ['name' => 'Service 4'],
            ['name' => 'Service 5']
        ];

        foreach ($services as $service) {
            $service = Service::create([
                'service_type_id' => ServiceType::inRandomOrder()->first()->id,
                'name' => $service['name'],
                'image' => 'https://placehold.co/600x400.png'
            ]);
        }
    }
}
