<?php

namespace App\Repositories;

use App\Contracts\Repository;
use App\Feedback;
use Illuminate\Support\Facades\DB;

class DbRepository implements Repository
{

    protected $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function save(Feedback $feedback) : bool
    {
        return DB::connection($this->connection)
            ->table('feedbacks')
            ->insert([
                'full_name' => $feedback->full_name,
                'phone' => $feedback->phone,
                'content' => $feedback->content
            ]);
    }
}
