<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateSketchRequest;
use App\Http\Resources\SketchResource;
use App\Models\Sketch;

class SketchesController extends Controller
{
    
    public function __construct(protected Sketch $repository) {}

    public function index() {

        $users = $this->repository->paginate();

        return SketchResource::collection($users);
    }

    public function show(string $user_id) {

        $sketch = $this->repository->findOrFail($user_id);

        return new SketchResource($sketch);
    }

    public function store(StoreUpdateSketchRequest $request) {

        $data = $request->validated();

        $sketch = $this->repository->create($data);
    
        return new SketchResource($sketch);
    }

}
