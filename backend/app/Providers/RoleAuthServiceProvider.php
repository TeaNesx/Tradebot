<?php

namespace App\Providers;

use App\Auth\RoleUserProvider;
use Illuminate\Auth\AuthManager;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Foundation\Application;

class RoleAuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->app->make(AuthManager::class)->provider('role', function (Application $app, array $config) {
            return new RoleUserProvider(
                $app['hash'],
                $config['model'],
                $config['role'] ?? null
            );
        });
    }
}
