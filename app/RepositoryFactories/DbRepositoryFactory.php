<?php

namespace App\RepositoryFactories;

use App\Contracts\RepositoryFactory;
use App\Repositories\DbRepository;
use Illuminate\Support\Facades\Config;

class DbRepositoryFactory implements RepositoryFactory
{
    protected $connection;

    public function __construct($connection = null)
    {
        $configKey = 'database.' . $connection;
        if (Config::has($configKey)) {
            $this->connection = $connection;
        } else {
            $this->connection = $this->fallbackConnection();
        }
    }

    public function getRepository()
    {
        return new DbRepository($this->connection);
    }

    protected function fallbackConnection()
    {
        return Config::get('database.default');
    }
}
