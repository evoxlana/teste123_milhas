<?php

namespace App123Milhas\Presenters;

use App123Milhas\Transformers\AuthorizedPersonTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class AuthorizedPersonPresenter.
 *
 * @package namespace App123Milhas\Presenters;
 */
class AuthorizedPersonPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new AuthorizedPersonTransformer();
    }
}
