<?php

namespace App\RepositoryFactories;

use App\Contracts\RepositoryFactory;
use App\Repositories\FileRepository;
use Illuminate\Support\Facades\Storage;

class FileRepositoryFactory implements RepositoryFactory
{
    protected $directoryPath;

    public function __construct($directoryPath = null)
    {
        if (Storage::exists($directoryPath)) {
            $this->directoryPath = $directoryPath;
        } else {
            $this->directoryPath = storage_path('/app/public/');
        }
    }

    public function getRepository()
    {
        return new FileRepository($this->directoryPath);
    }
}