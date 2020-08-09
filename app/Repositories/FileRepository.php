<?php

namespace App\Repositories;

use App\Contracts\Repository;
use App\Feedback;

class FileRepository implements Repository
{
    protected $directoryPath;

    public function __construct($directoryPath)
    {
        $this->directoryPath = $directoryPath;
    }

    public function save(Feedback $feedback)
    {
        $fullName = strtolower(implode('_', explode(' ', $feedback->full_name)));
        $timestamp = now()->format('Ymd_his');

        $fileName = $timestamp . '_' . $fullName;

        $fullPath = $this->directoryPath . DIRECTORY_SEPARATOR . $fileName;

        $file = fopen($fullPath, 'w');

        fwrite($file, 'Full name:' . $feedback->full_name . PHP_EOL);
        fwrite($file, 'Phone:' . $feedback->phone . PHP_EOL);
        fwrite($file, 'Content:' . $feedback->content . PHP_EOL);

        fclose($file);
    }
}
