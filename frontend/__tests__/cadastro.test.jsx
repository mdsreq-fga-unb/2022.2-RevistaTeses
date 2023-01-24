import {describe, expect, it, debug } from 'vitest';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cadastro from '../src/pages/cadastro';
import { BrowserRouter } from 'react-router-dom';

/* Testes para se fazer com o Cadastro:
    0.[x] Se renderiza a pagina
    1.[] Email e senha são obrigatórios (1)
    2.[] Não pode criar conta com email já cadastrado (1)
    3.[] Conta deve estar disponível para o login, assim que finalizar o cadastro (1)

*/ 

describe('Testar Cadastro',()=>{
    it('Renderizar a Area de Cadastro',()=>{
        render( <BrowserRouter>
        <Cadastro/>
        </BrowserRouter>
        );

        expect(screen.getByTestId("area_cadastro")).toBeInTheDocument();
    })

    it('Email e senha obrigatórios', () =>{
        render( <BrowserRouter>
            <Cadastro/>
            </BrowserRouter>
            );


    })
})