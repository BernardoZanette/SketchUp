<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SketchResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'title' => $this->title,
            'image' => $this->image,
            'note' => $this->note,
            'created' => Carbon::make($this->created_at)->format('Y-m-d'),
            'updated' => Carbon::make($this->updated_at)->format('Y-m-d')
        ];
    }
}
