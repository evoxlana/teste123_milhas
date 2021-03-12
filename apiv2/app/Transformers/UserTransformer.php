<?php

namespace App123Milhas\Transformers;

use League\Fractal\TransformerAbstract;
use App123Milhas\Models\User;
use DateTime;

/**
 * Class UserTransformer.
 *
 * @package namespace App123Milhas\Transformers;
 */
class UserTransformer extends TransformerAbstract
{
    protected $defaultIncludes = ['permission','sector'];

    /**
     * Transform the User entity.
     *
     * @param \App123Milhas\Models\User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id' => $model->id,
            'name' => $model->name,
            'email' => $model->email,
            'role' => $model->role,
            'img_profile' => env('APP_URL').'/storage/users/'.$model->img_profile,
            /* place your other model properties here */
            'status' => $model->status,
            'last_login_at' => $model->last_login_at,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }

}
