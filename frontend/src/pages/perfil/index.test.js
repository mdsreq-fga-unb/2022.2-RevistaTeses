import { render } from '@testing-library/react';
import Perfil from '.';

describe('Ver se a pagina de Perfil ta funcionando', () => {
    test('renderiza sem quebrar', () => {

        render(Perfil);
        const perfil = screen.getByTestId('perfil');
        expect(perfil).toBeInTheDocument();

    })
});