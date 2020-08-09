<?php

namespace App\Http\Controllers\Api;

use App\Feedback;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFeedbackRequest;
use App\RepositoryFactories\DbRepositoryFactory;
use App\RepositoryFactories\FileRepositoryFactory;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store()
    {
        $factory = new DbRepositoryFactory();
        $repository = $factory->getRepository();

        $feedback = new Feedback([
            'full_name' => 'Bositkhon Shoumarov',
            'phone' => '+99899880666',
            'content' => 'Something happened'
        ]);

        $repository->save($feedback);
    }
}
