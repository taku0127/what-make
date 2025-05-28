<?php

namespace Database\Seeders;

use App\Models\User;
use Dom\Comment;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call([
            UserSeeder::class,
            ProblemSeeder::class,
            ProductSeeder::class,
            BookmarkSeeder::class,
            CommentSeeder::class,
            LikeSeeder::class,
        ]);
    }
}
