<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Problem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
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
                Comment::factory()->create([
                    'user_id' => $userId,
                    'problem_id' => $problemId,
                ]);
            }
        }
    }
}
