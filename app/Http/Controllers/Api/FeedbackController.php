<?php

namespace App\Http\Controllers\Api;

use App\Feedback;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFeedbackRequest;
use App\RepositoryFactories\DbRepositoryFactory;
use App\RepositoryFactories\FileRepositoryFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FeedbackController extends Controller
{
    public function store(StoreFeedbackRequest $request)
    {
        $factory = new DbRepositoryFactory();
        $repository = $factory->getRepository();

        $feedback = new Feedback($request->all());

        $repository->save($feedback);

        return response()->json([
            'meta' => [
                'success' => true,
                'message' => 'Feedback has been saved',
                'status_code' => Response::HTTP_OK
            ]
        ], Response::HTTP_OK);
    }
}
