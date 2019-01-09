<?php

namespace Tests\Feature;

use Tests\TestCase;
class AlphaTest extends TestCase
{
    public function testDisplaysAlpha()
    {

        $this->get('/alpha')
            ->assertSee('Alpha')
            ->assertDontSee('Beta');
    }
}
