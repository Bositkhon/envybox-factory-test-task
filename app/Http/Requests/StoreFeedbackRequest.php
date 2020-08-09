<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFeedbackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => [
                'required',
                'alpha'
            ],
            'phone' => [
                'required',
                'regex:/^\+998(\d{2})(\d{7)$/',
            ],
            'content' => [
                'required',
                'string'
            ]
        ];
    }
}
