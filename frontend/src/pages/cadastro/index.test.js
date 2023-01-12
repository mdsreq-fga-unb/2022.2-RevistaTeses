import React from 'react';
import { render } from '@testing-library/react';
import Cadastro from '.';

describe('Ver se a pagina de cadastro ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Cadastro);
        const cadastro = screen.getByTestId('area_cadastro');
        expect(cadastro).toBeInTheDocument();

    })
});
