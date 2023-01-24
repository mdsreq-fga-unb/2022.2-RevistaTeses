import { render, screen } from '@testing-library/react';
import EditarConta from '../src/pages/editarConta';
import TrocarSenha from '../src/pages/trocarSenha';

/* Testes para se fazer com funçao de Editar Contas:
    0. Se renderiza a pagina
    1. Deve poder trocar o email, exigindo a senha para confirmar a mudança (4)
    2. Para trocar a senha deve informar a senha atual e em seguida informar a nova senha (4.1)
    3. Deve ter todos os dados excluídos (5)
    4. O email deve estar disponível para criação de nova conta, logo após a exclusão da conta(5)
*/