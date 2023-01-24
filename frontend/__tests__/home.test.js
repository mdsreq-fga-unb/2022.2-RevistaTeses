import { render, screen } from '@testing-library/react';
import Home from '../src/pages/home';

/* Testes para se fazer com o Login:
    0. Se renderiza a pagina
    1. Deve acessar as postagens sem precisar de login (6)
    2. Para interagir com as postagens, é necessário realizar o login (6)
    3. Para interagir com os comentários das postagens, é necessário realizar o login (6)
    
*/ 
Home