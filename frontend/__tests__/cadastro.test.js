import {describe, expect, it, render, screen } from 'vitest';
import Cadastro from '../src/pages/cadastro';

/* Testes para se fazer com o Cadastro:
    0.Se renderiza a pagina
    1.Email e senha são obrigatórios (1)
    2.Não pode criar conta com email já cadastrado (1)
    3.Conta deve estar disponível para o login, assim que finalizar o cadastro (1)

*/ 


describe('Testar Cadastro',()=>{
    it('Renderizar a página',()=>{
        render(Cadastro);

        const cadastroTitle = screen.getByRole('Criar Conta')

        expect(cadastroTitle).toBeInTheDocument();
    })

    it('Email e senha obrigatórios', () =>{
        


    })
})