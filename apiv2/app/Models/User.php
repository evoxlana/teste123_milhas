<?php

namespace App123Milhas\Models;

use Carbon\Carbon;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use League\OAuth2\Server\Exception\OAuthServerException;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

/**
 * Class User.
 *
 * @package namespace App123Milhas\Models;
 */
class User extends \App123Milhas\Models\Base\User implements Transformable,
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract,
    MustVerifyEmail
{
    use TransformableTrait,Authenticatable, Authorizable, CanResetPassword;
    use Notifiable, HasApiTokens, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'extension',
        'role',
        'img_profile',
        'status',
        'last_login_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @param $password
     * @return bool
     * @throws OAuthServerException
     */
    public function validateForPassportPasswordGrant($password)
    {
        if (Hash::check($password, $this->getAuthPassword())) {
            //is user active?
            if ($this->status == 'ativo' ) {
               // dd($this->data_inicio_acesso == null);
                if(($this->data_inicio_acesso != null && $this->data_fim_acesso != null) && Carbon::create($this->data_inicio_acesso)->gte(Carbon::today()) &&
                    Carbon::today()->lte(Carbon::create($this->data_fim_acesso))) {
                    return  true;
                } else if($this->data_inicio_acesso == null && $this->data_fim_acesso == null){
                    //dd($this->data_inicio_acesso == null);
                    return  true;
                } else {
                    throw new OAuthServerException('User account is not active', 6, 'account_inactive', 401);
                }

            }else{
                throw new OAuthServerException('User account is not active', 6, 'account_inactive', 401);
            }
        }
    }

    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function hasVerifiedEmail()
    {
        // TODO: Implement hasVerifiedEmail() method.
    }

    /**
     * Mark the given user's email as verified.
     *
     * @return bool
     */
    public function markEmailAsVerified()
    {
        // TODO: Implement markEmailAsVerified() method.
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        // TODO: Implement sendEmailVerificationNotification() method.
    }

    public function getEmailForVerification()
    {
        // TODO: Implement getEmailForVerification() method.
    }
}
