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

        $attributes = $feedback->getAttributes();

        $file = fopen($fullPath, 'w');

        foreach ($attributes as $attribute => $value) {
            fwrite($file, $attribute . ':' . $value . PHP_EOL);
        }

        fclose($file);
    }
}
