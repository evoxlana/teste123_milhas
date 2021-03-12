<?php

use App123Milhas\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create(
            [

                'name' => 'Administrador',
                'email' => 'admin@admin.com',
                'role' => 'admin',
                'extension' => '9172',
                'password' => bcrypt(123456),
                'remember_token' => md5(10) 
            ]);
    }
}
