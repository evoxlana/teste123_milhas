<?php

namespace App123Milhas\Repositories;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App123Milhas\Presenters\UserPresenter;
use App123Milhas\Models\User;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App123Milhas\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    protected $skipPresenter = true;

    /**
     * @param $data
     * @return mixed
     */
    public function listUsers($data)
    {
        $order[0] = $order[0] ?? 'name';
        $order[1] = $order[1] ?? 'asc';
        $where = $data['where'];
        if (isset($where['value']) && $where['value'] != '') {
            $results = $this->model
                ->orderBy($order[0], $order[1])
                ->where(function ($query) use ($where) {
                    if (isset($where['value']) && $where['value'] != '') {
                        return $query->where($where['field'], 'like', '%' . $where['value'] . '%');
                    }
                    return $query;
                })
                ->where('status', $where['status'])
                ->where('role',  '!=' .'master')
                ->get();
        } else {
            $results = $this->model
                ->orderBy($order[0], $order[1])
                ->where('status', $where['status'])
                ->where('role',  '!=' .'master')
                ->paginate();
        }

        if ($results) {
            return $this->parserResult($results);
        }

        throw (new ModelNotFoundException())->setModel($this->model());

    }

    /**
     * @param $status
     * @return mixed
     */
    public function listUsersTrash($status)
    {
        $result = $this->model->where('status', $status)->where('deleted_at', '<>', null)->orderBy('name')->withTrashed()
            ->paginate();
        if ($result) {
            return $this->parserResult($result);
        }
        throw (new ModelNotFoundException())->setModel($this->model());
    }

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }


    /**
     * Boot up the repository, pushing criteria
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * @return string
     */
    public function presenter()
    {
        return UserPresenter::class;
    }
}
