import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('Ver se o componente Header ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Header);
        const Header = screen.getByTestId('header');
        expect(Header).toBeInTheDocument();

    })
});