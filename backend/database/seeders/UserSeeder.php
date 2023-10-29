<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => "Admin",
            'email' => 'sjgalaxy98@gmail.com',
            'contact_no' => '+916291839827',
            'password' => Hash::make('password'),
        ]);
        $admin->roles()->save(Role::find(1));
    }
}
