<?php

namespace Database\Seeders;

use App\Models\ServiceType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $service_types = [
            'Service Type 1',
            'Service Type 2',
            'Service Type 3',
            'Service Type 4',
            'Service Type 5'
        ];

        foreach ($service_types as $service_type) {
            $service_type = ServiceType::create(['name' => $service_type]);
        }
    }
}
