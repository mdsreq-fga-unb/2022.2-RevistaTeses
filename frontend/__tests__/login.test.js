import { render, screen } from '@testing-library/react';
import Login from '../src/pages/login';

/* Testes para se fazer com o Login:
    0.Se renderiza a pagina
    1. Deve utilizar email e senha para realizar o login (2)
    2. Caso os dados estejam incorretos, o login não pode ser realizado e deve retornar uma mensagem (2)
    3. O usuário deve estar autenticado por cookies (2)
*/ 
