<?php

namespace App\Http\Controllers\API;

use App\Models\Sketch;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\SketchResource;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreUpdateSketchRequest;

class SketchesController extends Controller
{
    public function __construct(protected Sketch $repository) {}

    public function index() {

        $sketches = $this->repository->paginate();

        return SketchResource::collection($sketches);
    }

    public function show(string $user_id) {

        $sketch = $this->repository->findOrFail($user_id);

        return new SketchResource($sketch);
    }

    public function store(StoreUpdateSketchRequest $request) {

        $path = Storage::disk('public')->put('sketches', $request->file('image'));

        $data = $request->validated();

        $data['image'] = $path; 

        $sketch = $this->repository->create($data);
    
        return new SketchResource($sketch);
    
    }

    public function update(StoreUpdateSketchRequest $request, string $id) {

        $sketch = $this->repository->findOrFail($id);

        if ($oldImage = $sketch['image']){
            Storage::disk('public')->delete($oldImage);
        }

        $path = Storage::disk('public')->put('sketches', $request['image']);

        $data = $request->validated();

        $sketch->update($data);

        $data = $request->validated();

        $data['image'] = $path; 

        $sketch->update($data);

        return new SketchResource($sketch);

    }

    public function destroy(string $id) {

        $this->repository->findOrFail($id)->delete();
        
        return response()->json([], Response::HTTP_NO_CONTENT);

    }

}
