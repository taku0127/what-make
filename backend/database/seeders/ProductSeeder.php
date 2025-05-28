<?php

namespace Database\Seeders;

use App\Models\Problem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
    $faker = Faker::create();

    $userIds = User::pluck('id');
    $problemIds = Problem::pluck('id');

    foreach ($userIds as $userId) {
        foreach ($problemIds as $problemId) {
            Product::firstOrCreate(
                [
                    'user_id' => $userId,
                    'problem_id' => $problemId,
                ],
                [
                    'url' => $faker->url,
                ]
            );
        }
    }
    }
}
