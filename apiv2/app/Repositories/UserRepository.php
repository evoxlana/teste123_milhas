<?php

namespace App123Milhas\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface UserRepository.
 *
 * @package namespace App123Milhas\Repositories;
 */
interface UserRepository extends RepositoryInterface
{
    /**
     * @param $data
     * @return mixed
     */
    public function listUsers($data);

    /**
     * @param $status
     * @return mixed
     */
    public function listUsersTrash($status);

}
