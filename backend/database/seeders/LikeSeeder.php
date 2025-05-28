<?php

namespace Database\Seeders;

use App\Models\Like;
use App\Models\Problem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LikeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $userIds = User::pluck('id');

        $problemIds = Problem::pluck('id');

        foreach ($userIds as $userId) {
            foreach ($problemIds as $problemId) {
                Like::firstOrCreate([
                    'user_id' => $userId,
                    'problem_id' => $problemId,
                ]);
            }
        }
    }
}
