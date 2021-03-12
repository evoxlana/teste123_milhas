<?php

/**
 * Created by Reliese Model.
 */

namespace App123Milhas\Models\Base;

use App123Milhas\Models\Accessor;
use App123Milhas\Models\Acessor;
use App123Milhas\Models\Councilor;
use App123Milhas\Models\Departament;
use App123Milhas\Models\Log;
use App123Milhas\Models\Permission;
use App123Milhas\Models\PropositionIncrement;
use App123Milhas\Models\PropositionSector;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class User
 * 
 * @property int $id
 * @property int $sector_id
 * @property string $name
 * @property string $role
 * @property string $status
 * @property string $email
 * @property string $img_profile
 * @property Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $extension
 * @property string|null $remember_token
 * @property Carbon|null $last_login_at
 * @property string|null $deleted_at
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property \Carbon\Carbon $data_inicio_acesso
 * @property \Carbon\Carbon $data_fim_acesso
 * @property Collection|Accessor[] $accessors
 * @property Collection|Acessor[] $acessors
 * @property Collection|Councilor[] $councilors
 * @property Collection|Departament[] $departaments
 * @property Collection|Log[] $logs
 * @property Collection|PropositionIncrement[] $proposition_increments
 * @property Collection|PropositionSector[] $proposition_sectors
 * @property Collection|Permission[] $permissions
 * @property \App123Milhas\Models\Sector $sector
 *
 * @package App123Milhas\Models\Base
 */
class User extends Model
{
	use SoftDeletes;
	protected $table = 'users';

	protected $casts = [
		'sector_id' => 'int'
	];

	protected $dates = [
		'email_verified_at',
		'last_login_at'
	];

	public function accessors()
	{
		return $this->hasMany(Accessor::class);
	}

	public function acessors()
	{
		return $this->hasMany(Acessor::class);
	}

	public function councilors()
	{
		return $this->hasMany(Councilor::class);
	}

	public function departaments()
	{
		return $this->hasMany(Departament::class);
	}

	public function logs()
	{
		return $this->hasMany(Log::class);
	}

	public function proposition_increments()
	{
		return $this->hasMany(PropositionIncrement::class);
	}

	public function proposition_sectors()
	{
		return $this->hasMany(PropositionSector::class);
	}

	public function sector()
	{
		return $this->belongsTo(\App123Milhas\Models\Sector::class);
	}

	public function permissions()
	{
		return $this->belongsToMany(Permission::class, 'user_permissions')
					->withPivot('id')
					->withTimestamps();
	}
}
