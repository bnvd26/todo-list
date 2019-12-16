<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TodoController extends Controller
{
    /**
     * @Route("/")
     */
    public function app()
    {
        return $this->render('pages/home.html.twig');
    }
}