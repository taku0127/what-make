<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use App\Models\Problem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookmarkSeeder extends Seeder
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
                Bookmark::firstOrCreate([
                    'user_id' => $userId,
                    'problem_id' => $problemId,
                ]);
            }
        }
    }
}
