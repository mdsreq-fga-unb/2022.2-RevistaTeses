import React from 'react';
import { render } from '@testing-library/react';
import EditarConta from '.';

describe('Ver se a pagina de login ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(EditarConta);
        const editConta = screen.getByTestId('area_editar');
        expect(editConta).toBeInTheDocument();

    })
});