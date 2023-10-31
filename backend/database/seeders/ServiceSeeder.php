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
        $jsonString = '[
            {"id":1,"service_type_id":1,"name":"Wash & Detailing","description":"Elevate your vehicle\'s allure with our meticulous car wash & detailing services. Experience a fresh, revitalized ride like never before.","image":"services/y8nMFpoASdqO6EG8Uh4tEhBUvSIctP0wx4ZXx8db.jpg","created_at":"2023-10-29T22:09:43.000000Z","updated_at":"2023-10-29T23:18:15.000000Z"},
            {"id":2,"service_type_id":1,"name":"Interior Sanitisation","description":"Ensure a clean, germ-free cabin with our car interior sanitization. Drive confidently in a hygienic space.","image":"services/kzvNCGTvIachZbNkz4Ow10ocleaomOvmZVDu0xT4.jpg","created_at":"2023-10-29T22:09:43.000000Z","updated_at":"2023-10-29T23:19:06.000000Z"},
            {"id":3,"service_type_id":1,"name":"Underbody Rust Protection & Coating","description":"Guard against corrosion with our underbody rust protection & coating. Drive with confidence, knowing your car is shielded.","image":"services/3rfh987xpZlGkg2QGdIO8CqIGVMhR7iSvQEUNrz5.jpg","created_at":"2023-10-29T22:09:43.000000Z","updated_at":"2023-10-29T23:19:45.000000Z"},
            {"id":4,"service_type_id":1,"name":"Denting & Painting","description":"Restore your car\'s charm with precision denting & painting. Witness a seamless transformation that impresses.","image":"services/nVsGmqV4R6aJcoJrgkQMPIfWfHuKGFrxodE9JMqE.jpg","created_at":"2023-10-29T22:09:43.000000Z","updated_at":"2023-10-29T23:20:34.000000Z"},
            {"id":5,"service_type_id":1,"name":"Ac Service & Gas Charge","description":"Experience cool comfort with our car AC service & gas recharge. Drive refreshed as your AC performs optimally.","image":"services/5MsUvgdoboCDS9wc5zXpM640MVCYNquwS0RlPRCT.webp","created_at":"2023-10-29T22:09:43.000000Z","updated_at":"2023-10-29T23:21:42.000000Z"},
            {"id":6,"service_type_id":1,"name":"Corrosion Protection","description":"Shield your car from rust with our corrosion protection services. Drive with peace of mind and a pristine exterior.","image":"services/u1l52cKKgudrrvUhZf2UhdEgRTnxgHlLqeAShvDy.jpg","created_at":"2023-10-29T23:22:30.000000Z","updated_at":"2023-10-29T23:49:24.000000Z"}
        ]';

        $services = json_decode($jsonString, true);

        foreach ($services as $service) {
            $service = Service::create([
                'service_type_id' => ServiceType::inRandomOrder()->first()->id,
                'name' => $service['name'],
                'description' => $service['description'],
                'image' => $service['image']
            ]);
        }
    }
}
