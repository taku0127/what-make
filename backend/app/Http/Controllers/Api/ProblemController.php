<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Problem;
use App\Models\Product;
use Illuminate\Http\Request;

class ProblemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'latest' => $this->getLatestProblems()->limit(4)->get(),
            'popular' => $this->getPopularProblems()->limit(4)->get(),
            'bookmark' => $this->getBookmarkProblems()->limit(4)->get(),
            'products' => $this->getProductProblems()->limit(4)->get(),
        ]);
    }

    public function detail($id){
        $problemDetail = Problem::with(['user','comments.user',
        'products'=> function($query){$query->orderBy('updated_at','desc');},
        'products.user','likes'])->withCount(['likes','comments'])->find($id);
        return response()->json($problemDetail);
    }

    public function updateProduct(Request $request, string $id){
        $userId = $request->user()->id;
        $product = Product::where('user_id', $userId)
            ->where('id', $id)
            ->first();
        if (!$product) {
            return response()->json(['error' => 'Product not found or unauthorized'], 404);
        }
        $product->url = $request->url;
        $product->save();
        return response()->json($product);
    }

    public function storeProduct(Request $request, string $id){

        $userId = $request->user()->id;
        // すでに投稿があるかチェック
        $exists = Product::where('user_id', $userId)
            ->where('problem_id', $id)
            ->exists();

        if ($exists) {
            return response()->json(['error' => 'すでに投稿済みです'], 400);
        }
        $product = Product::create([
            'url' => $request->url,
            'user_id' => $userId,
            'problem_id' => $id,
        ]);
        $product->load('user');
        return response()->json($product);
    }

    public function deleteProduct(Request $request,string $id){
        $userId = $request->user()->id;
        $product = Product::where('user_id', $userId)
            ->where('id', $id)
            ->first();
        if (!$product) {
            return response()->json(['error' => 'Product not found or unauthorized'], 404);
        }
        $product->delete();
        return response()->json($product);
    }

    private function getLatestProblems(){
        return Problem::withCount(['likes','comments'])->orderBy('created_at','desc');
    }

    private function getPopularProblems(){
        return Problem::withCount(['likes','comments'])->orderBy('likes_count','desc');
    }

    private function getBookmarkProblems(){
        return Problem::withCount('bookmarks')->orderBy('bookmarks_count','desc');
    }

    private function getProductProblems(){
        return Product::with(['user','problem'])->orderBy('created_at','desc');
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
