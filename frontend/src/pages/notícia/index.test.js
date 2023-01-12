import React from 'react';
import { render } from '@testing-library/react';
import Noticias from '.';

describe('Ver se a pagina de Noticias ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Noticias);
        const noticias = screen.getByTestId('noticias');
        expect(noticias).toBeInTheDocument();

    })
});
