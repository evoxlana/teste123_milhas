<?php

namespace App123Milhas\Services;

use App123Milhas\Repositories\AuditRepository;
use Illuminate\Support\Facades\DB;

class AuditService
{
    /**
     * @var AuditRepository
     */
    private $repository;

    /**
     * AuditService constructor.
     * @param AuditRepository $repository
     */
    public function __construct(AuditRepository $repository)
    {
        $this->repository = $repository;
    }
}
