import React from 'react';
import { render } from '@testing-library/react';
import Login from '.';

describe('Ver se a pagina de login ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Login);
        const login = screen.getByTestId('area_login');
        expect(login).toBeInTheDocument();

    })
});

describe('Testar valores diferentes para email e senha', () => {
    test('Resposta à um usuário não cadastrado', async () => {

        const usuarioNaoCadastrado = {
            nome: UserNaoCadastrado,
            senha: 123456789
        }
        
        render(Login);

        const button = screen.getByText('Entrar');
        

    })
});