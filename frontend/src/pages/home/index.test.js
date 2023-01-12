import { render } from '@testing-library/react';
import Home from '.';

describe('Ver se a pagina de Home ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Home);
        const home = screen.getByTestId('home');
        expect(home).toBeInTheDocument();

    })
});