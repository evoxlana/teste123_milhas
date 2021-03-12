<?php

namespace App123Milhas\Http\Controllers\Api\V1\Admin;

use App123Milhas\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App123Milhas\Services\FlightsService;
use Illuminate\Support\Facades\Auth;

class FlightsController extends Controller
{

    /**
     * @var FlightsService
     */
    private $service;

    /**
     * FlightsController constructor.
     * @param FlightsService $service
     */
    public function __construct(FlightsService $service)
    {
        $this->service = $service;
    }

    /**
     * Função principal para retornar os voos
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->service->getFlights();
    }


}
