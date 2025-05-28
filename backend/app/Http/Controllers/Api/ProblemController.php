<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Problem;
use Illuminate\Http\Request;

class ProblemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'latest' => $this->getLatestProblems(),
            'popular' => $this->getPopularProblems(),
            'bookmark' => $this->getBookmarkProblems(),
        ]);
    }

    private function getLatestProblems(){
        return Problem::orderBy('created_at','desc')->get();
    }

    private function getPopularProblems(){
        return Problem::withCount('likes')->orderBy('likes_count','desc')->get();
    }

    private function getBookmarkProblems(){
        return Problem::withCount('bookmarks')->orderBy('bookmarks_count','desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
