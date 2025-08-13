<?php

namespace App\Auth;

use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable;

class RoleUserProvider extends EloquentUserProvider
{
    /**
     * The role to filter users by.
     *
     * @var string|null
     */
    protected $role;

    /**
     * Create a new role user provider.
     *
     * @param  \Illuminate\Contracts\Hashing\Hasher  $hasher
     * @param  string  $model
     * @param  string|null  $role
     * @return void
     */
    public function __construct($hasher, $model, $role = null)
    {
        parent::__construct($hasher, $model);
        $this->role = $role;
    }

    /**
     * Retrieve a user by their unique identifier.
     *
     * @param  mixed  $identifier
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function retrieveById($identifier)
    {
        $model = parent::retrieveById($identifier);

        return $this->checkRole($model);
    }

    /**
     * Retrieve a user by their unique identifier and "remember me" token.
     *
     * @param  mixed  $identifier
     * @param  string  $token
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function retrieveByToken($identifier, $token)
    {
        $model = parent::retrieveByToken($identifier, $token);

        return $this->checkRole($model);
    }

    /**
     * Retrieve a user by the given credentials.
     *
     * @param  array  $credentials
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function retrieveByCredentials(array $credentials)
    {
        // Add role to credentials if specified
        if ($this->role !== null) {
            $credentials['role'] = $this->role;
        }

        return parent::retrieveByCredentials($credentials);
    }

    /**
     * Check if the user has the required role.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable|null  $model
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    protected function checkRole(?Authenticatable $model)
    {
        if ($model && $this->role !== null && $model->role !== $this->role) {
            return null;
        }

        return $model;
    }
}
