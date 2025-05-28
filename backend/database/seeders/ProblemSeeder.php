<?php

namespace Database\Seeders;

use App\Models\Problem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProblemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $userIds = User::pluck('id');

        foreach ($userIds as $userId) {
            Problem::factory()->create([
                'user_id' => $userId,
            ]);
        }
    }
}
