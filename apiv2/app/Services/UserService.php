<?php

namespace App123Milhas\Services;

use App123Milhas\Repositories\UserPermissionRepository;
use App123Milhas\Repositories\UserRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class UserService
{
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var UserPermissionRepository
     */
    private $permissionRepository;

    /**
     * @param UserRepository $userRepository
     * @param UserPermissionRepository $permissionRepository
     */
    public function __construct(UserRepository $userRepository, UserPermissionRepository $permissionRepository)
    {
        $this->userRepository = $userRepository;
        $this->permissionRepository = $permissionRepository;
    }

    /**
     * @param $limit
     * @return mixed
     */
    public function getUsers($limit)
    {
        return $this->userRepository->skipPresenter(false)->listUsers($limit);
    }


    /**
     * @param $id
     * @return mixed
     */
    public function getId($id)
    {
        return $this->userRepository->skipPresenter(false)->find($id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function authenticated($id)
    {
        $user = $this->userRepository->find($id);

        $user->last_login_at = Carbon::now()->toDateTimeString();

        $user->save();

        return $this->userRepository->skipPresenter(false)->find($id);
    }

    /**
     * @param $data
     * @return mixed
     * @throws \Exception
     */
    public function create($data)
    {
        DB::beginTransaction();
        try {

            $data['remember_token'] = bcrypt(10);

            $data['email_verified_at'] = new \DateTime();

            $data['password'] = bcrypt(123456);

            //dd($data);
            $result = $this->userRepository->create($data);
            DB::commit();
            return ['status' => 'success', 'user' => $result];

        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $id
     * @param $password
     * @return array
     * @throws \Exception
     */
    public function updatePassword($id, $password)
    {
        DB::beginTransaction();
        try {

            $user = $this->userRepository->find($id);

            $user->password = bcrypt($password);

            $user->save();
            DB::commit();
            return ['status' => 'success', 'id' => $user->id];
        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $id
     * @param $password
     * @return array
     * @throws \Exception
     */
    public function updateStatus($id)
    {
        DB::beginTransaction();
        try {

            $user = $this->userRepository->find($id);

            if ($user->status == 'ativo') {
                $user->status = 'inativo';
            } else {
                $user->status = 'ativo';
            }

            $user->save();

            DB::commit();
            return ['status' => 'success', 'id' => $user->id];

        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $data
     * @param $id
     * @return array
     * @throws \Exception
     */
    public function update($data, $id)
    {
        DB::beginTransaction();
        try {
            $user = $this->userRepository->find($id);

            $user->name = $data['name'];
            $user->data_inicio_acesso = $data['data_inicio_acesso'];
            $user->data_fim_acesso = $data['data_fim_acesso'];
            $user->role = $data['role'];
            $user->img_profile = $data['img_profile'];
            $user->sector_id = $data['sector_id'];

            $user->save();

            DB::commit();

            return ['status' => 'success'];
        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $data
     * @param $id
     * @return array
     * @throws \Exception
     */
    public function updateAccess($data, $id)
    {
        DB::beginTransaction();
        try {
            $user = $this->userRepository->find($id);
            $user->data_inicio_acesso = $data['data_inicio_acesso'];
            $user->data_fim_acesso = $data['data_fim_acesso'];
            $user->save();

            DB::commit();

            return ['status' => 'success'];
        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $id
     * @return array
     * @throws \Exception
     */
    public function delete($id)
    {
        DB::beginTransaction();
        try {
            $this->userRepository->delete($id);
            DB::commit();
            return ['status' => 'success'];
        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }

    /**
     * @param $id
     * @param $permissionId
     * @return array
     * @throws \Exception
     */
    public function createPermission($id, $permissionId)
    {
        DB::beginTransaction();
        try{
            $user = $this->userRepository->find($id);

            $data = [
              "user_id" => $user->id,
              "permission_id" => $permissionId
            ];

            $this->permissionRepository->create($data);

            DB::commit();

            return ['status' => 'success'];
        } catch (\Exception $exception) {
            DB::rollBack();
            return ['status' => 'error', 'message' => $exception->getMessage(), 'title' => 'Erro'];
        }
    }
}
