import React from 'react';
import { render } from '@testing-library/react';
import TrocarSenha from '.';

describe('Ver se a pagina de login ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(TrocarSenha);
        const trocarsenha = screen.getByTestId('area_trocar_senha');
        expect(trocarsenha).toBeInTheDocument();

    })
});