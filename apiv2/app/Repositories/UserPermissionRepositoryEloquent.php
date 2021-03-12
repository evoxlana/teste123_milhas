<?php

namespace App123Milhas\Repositories;

use App123Milhas\Presenters\UserPermissionPresenter;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App123Milhas\Models\UserPermission;

/**
 * Class UserPermissionRepositoryEloquent.
 *
 * @package namespace App123Milhas\Repositories;
 */
class UserPermissionRepositoryEloquent extends BaseRepository implements UserPermissionRepository
{
    protected $skipPresenter = true;

    public function findWherePermission($id,$idUser)
    {
        return $this->model->where('permission_id',$id)->where('user_id',$idUser)->get();
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return UserPermission::class;
    }


    /**
     * Boot up the repository, pushing criteria
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function presenter()
    {
        return UserPermissionPresenter::class;
    }

}
