<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateSketchRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'user_id' => 'required',
            'title' => 'max:255',
            'image' => [
                'required',
                'mimes:jpeg,jpg,png,bmp',
                'max:5000'
            ],
            'note' => 'min:3|max:255'
        ];

        if ($this->method() === 'PATCH') {
            $rules['user_id'] = '';
            $rules['image'] = 'nullable';
        }

        return $rules;
    }
}
