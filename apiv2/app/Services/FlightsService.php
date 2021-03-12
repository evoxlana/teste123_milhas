<?php

namespace App123Milhas\Services;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class FlightsService
{
   

    /**
     * Função príncipal para pegar os voos e chamar as funções de agrupamento e formatar retorno
     * 
     * @return json
     */
    public function getFlights()
    { 
       $client = new Client();
       $response = $client->get("http://prova.123milhas.net/api/flights"); 
       $dados = $this->groupFlights(json_decode($response->getBody()));
       return $this->formatReturn($response, $dados);
    }

    /**
     * Função que agrupa os voos de Ida e Volta
     * 
     * @param $data // Dados dos voos API 123MIlhas
     * @return array // Dados agrupados
     */
    private function groupFlights($data)
    {
        $fareAux = "";
        $priceAux = "";
        $outbAux = "";
        $inboundAux = "";
        $idIda = 1;
        $idVolta = 1;
        $groupsIdas =[];
        $groupsVoltas =[];
        $pos = 0;
        $v ="";

        foreach ($data as $key=> $value) {
        
            if($fareAux != $value->fare) {
                if($value->outbound == 1) {
                    $v = "";
                    $groupsIdas[$pos]=[
                        "id_v" => $idIda,
                        "valor" => $value->price,
                        "voo" => $v .= $value->id,
                        "fare" => $value->fare,
                        "tx" => "ida"
                    ];
                }
                else if($value->inbound == 1){
                    $pos ++;
                    $idVolta++;
                    $v = "";
                    $groupsVoltas[$pos]=[
                        "id_v" => $idVolta,
                        "voo" =>   $v .= $value->id,
                        "valor" => $value->price,
                        "fare" => $value->fare,
                        "tx" => "volta"
                    ];
                   
                }
                $fareAux =  $value->fare;
                $priceAux = $value->price;
                $outbAux = $value->outbound;
               
            }
            else if($fareAux == $value->fare) {
                if($value->outbound == 1) {
                    if( $priceAux == $value->price) {
                        $groupsIdas[$pos]["voo"] = $v .= ', '.$value->id;

                    }
                    else if($priceAux != $value->price) {   
                        $idIda ++;
                        $pos ++;
                        $v = "";
                        $groupsIdas[$pos] =[
                            "id_v" => $idIda,
                            "voo" =>  $v .= $value->id,
                            "valor" => $value->price,
                            "fare" => $value->fare,
                            "tx" => "ida"
                        ];
                    }
                   
                }
                else if($value->inbound == 1){
                    if($value->inbound != $inboundAux || $priceAux != $value->price){
                        $pos ++;
                        if(!empty($groupsVoltas)){
                            $idVolta ++;
                        }
                        $v = "";
                        $groupsVoltas[$pos] =[
                            "id_v" => $idVolta,
                            "voo" =>   $v .= $value->id,
                            "valor" => $value->price,
                            "fare" => $value->fare,
                            "tx" => "volta"
                        ];
                    }
                    else if ( $priceAux == $value->price){
                        $groupsVoltas[$pos]["voo"] = $v .= ', '.$value->id;
                    }
                    
                }
                $priceAux = $value->price;
                $fareAux =  $value->fare;
                $outbAux = $value->outbound;
                $inboundAux = $value->inbound;
            }    
        }

        $dados = array_merge( $groupsIdas, $groupsVoltas);
        return  $dados;
    }

    /**
     * Função responsável por formatar o retorno do json
     * @param $response // Reposta API 123Milhas
     * @param $dados // Agrupamento dos voos
     * 
     * @return json
     */
    private function formatReturn($response, $dados)
    {
        $id = 1;
        $preco = 0;
        $fare ="";
        $k =1;
        $menorPreco = 0;
        $idBarato = "";
        $total = 0;
        $vooUnico = 0;
        $groups["flights"] = json_decode($response->getBody());

        for( $i =0; $i < count($dados); $i++ ) {
            if($dados[$i]["tx"] == "ida"){
                $preco = $dados[$i]["valor"];
                $fare = $dados[$i]["fare"];

                for ($j = 0; $j < count($dados); $j++){

                    if($dados[$j]["tx"] == "volta" &&  $fare == $dados[$j]["fare"]){
                        $groups["groups"][$k] = [
                                "uniqueId" =>  $id,
                                "totalPrice" => $preco + $dados[$j]["valor"],
                                "outbound" => $dados[$i]["voo"],
                                "inbound" => $dados[$j]["voo"]
                        ];

                        $qtdIda =  explode(',', $groups["groups"][$k]["outbound"]);
                        $qtdVolta =  explode(',', $groups["groups"][$k]["inbound"]);

                        if(count($qtdIda) == 1 && count($qtdVolta) == 1){
                            $vooUnico ++;
                        }
                        if($menorPreco == 0){
                            //return $groups["groups"][$k]["totalPrice"];
                            $menorPreco =  $groups["groups"][$k]["totalPrice"];
                            $idBarato = $id;
                        }else if( $groups["groups"][$k]["totalPrice"] < $menorPreco){

                            $menorPreco =  $groups["groups"][$k]["totalPrice"];
                            $idBarato = $id;
                        }
                        $id ++;
                        $k++;
                        $total ++;  
                    }
                }    
                
            }
            else{
                continue;
            }
               
        }
        $groups["totalGroups"] =  $total;
        $groups["totalFlights"] =  $vooUnico;
        $groups["cheapestPrice"] = $menorPreco;
        $groups["cheapestGroup"] = $idBarato;

        return $groups;    
    }
}