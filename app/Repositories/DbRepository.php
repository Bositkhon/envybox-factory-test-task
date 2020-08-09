<?php

namespace App\Repositories;

use App\Contracts\Repository;
use App\Feedback;

class DbRepository implements Repository
{

    protected $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function save(Feedback $feedback) : bool
    {
        $feedback->setConnection($this->connection);

        return $feedback->save();
    }
}
