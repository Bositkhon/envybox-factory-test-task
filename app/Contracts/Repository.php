<?php

namespace App\Contracts;

use App\Feedback;

interface Repository
{
    public function save(Feedback $feedback);
}
