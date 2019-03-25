<?php

namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;


trait ApiResponser {
    protected function successResponse ($data, $code) {
        return response()->json($data, $code);
    }

    protected function errorObject ($errors, $code) {
        return response()->json(['error' => $errors, 'code' => $code], $code);
    }

    protected function errorResponse ($message, $code = 422) {
        return response()->json(["error_message" => $message, "code" => $code], $code);
    }

    protected function showAll (Collection $collection, $code = 200) {
        return $this->successResponse(['data' => $collection], $code);
    }
    
    protected function showOne (Model $instance, $code = 200) {
        return $this->successResponse(['data' => $instance], $code);
    }
}