<?php

namespace App123Milhas\Repositories;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface UserPermissionRepository.
 *
 * @package namespace App123Milhas\Repositories;
 */
interface UserPermissionRepository extends RepositoryInterface
{
    /**
     * @param $id
     * @param $idUser
     * @return mixed
     */
    public function findWherePermission($id, $idUser);
}
