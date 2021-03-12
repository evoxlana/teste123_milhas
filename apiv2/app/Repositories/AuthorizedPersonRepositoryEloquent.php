<?php

namespace App123Milhas\Repositories;

use App123Milhas\Presenters\AuthorizedPersonPresenter;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App123Milhas\Models\AuthorizedPerson;

/**
 * Class AuthorizedPersonRepositoryEloquent.
 *
 * @package namespace App123Milhas\Repositories;
 */
class AuthorizedPersonRepositoryEloquent extends BaseRepository implements AuthorizedPersonRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return AuthorizedPerson::class;
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
        return AuthorizedPersonPresenter::class;
    }
}
