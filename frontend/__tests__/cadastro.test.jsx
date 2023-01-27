import { fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import {describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';
import "@testing-library/jest-dom";
import "@faker-js/faker";

import Cadastro from '../src/pages/cadastro';
import Login from '../src/pages/login';

/* Testes para se fazer com o Cadastro:
    0.[x] Se renderiza a pagina
    1.[x] Email e senha são obrigatórios (1)
    2.[x] Não pode criar conta com email já cadastrado (1)
    3.[x] Conta deve estar disponível para o login, assim que finalizar o cadastro (1)
*/ 

const renderCadastro = () =>{
    render( 
        <BrowserRouter>
            <Cadastro/>
        </BrowserRouter>
        );
}

describe('Testar Cadastro',()=>{
    it('Renderizar a Area de Cadastro',()=>{
        renderCadastro();

        expect(screen.getByTestId("area_cadastro")).toBeInTheDocument();
    })

    it('Email e senha obrigatórios', () =>{
        render( 
            <BrowserRouter>
                <Cadastro/> 
            </BrowserRouter>
        );

        const testEmail = faker.internet.email();
        const testPassword = faker.internet.password(15,true);

        const inputNodeEmail = screen.getByTestId("email_input");
        const inputNodePassword = screen.getByTestId("password_input");
        const buttonRegistrar = screen.getByText("Registrar");

        fireEvent.change(inputNodeEmail,{target: {value: testEmail.replaceAll("@","")}})
        fireEvent.click(buttonRegistrar);
        expect(screen.getByText("Email inválido")).toBeInTheDocument();
        expect(screen.getByText("Nescessário senha")).toBeInTheDocument();
        
        fireEvent.change(inputNodeEmail,{target: {value: testEmail}})
        fireEvent.click(buttonRegistrar);
        expect(screen.getByText("Email inválido")).not.toBeInTheDocument();
        expect(screen.getByText("Nescessário senha")).toBeInTheDocument();

        fireEvent.change(inputNodePassword,{target: {value: testPassword}})
        fireEvent.click(buttonRegistrar);
        expect(screen.getByText("Nescessário senha")).not.toBeInTheDocument();
    })

    it('Não pode criar conta com email já cadastrado', () => {
        renderCadastro();

        const testEmailInvalid = "ana@gmail.com";
        const testPassword = "123456";

        const inputNodeEmail = screen.getByTestId("email_input");
        const inputNodePassword = screen.getByTestId("password_input");
        const buttonRegistrar = screen.getByText("Registrar");

        fireEvent.change(inputNodeEmail,{target: {value: testEmailInvalid}});
        fireEvent.change(inputNodePassword,{target: {value: testPassword}})
        fireEvent.click(buttonRegistrar);

        expect(screen.getByText("Email já registrado")).toBeInTheDocument();
    })

    it('Conta deve estar disponível para o login, assim que finalizar o cadastro', () => {
        renderCadastro();

        const testEmail = faker.internet.email();
        const testPassword = faker.internet.password(15,true);

        const inputNodeEmail = screen.getByTestId("email_input");
        const inputNodePassword = screen.getByTestId("password_input");
        const buttonRegistrar = screen.getByText("Registrar");
        
        fireEvent.change(inputNodeEmail,{target: {value: testEmail}});
        fireEvent.change(inputNodePassword,{target: {value: testPassword}});
        fireEvent.click(buttonRegistrar);
        
        render( 
            <BrowserRouter>
                <Login/> 
            </BrowserRouter>
        );

        const inputLoginEmail = screen.getByTestId("email_login_input");
        const inputLoginPassword = screen.getByTestId("password_login_input");
        const buttonEntrar = screen.getByTestId("entrarButton");

        fireEvent.change(inputLoginEmail,{target: {value: testEmail}});
        fireEvent.change(inputLoginPassword,{target: {value: testPassword}});
        fireEvent.click(buttonEntrar);

        expect(screen.getByText('E-mail ou senha incorreta')).not.toBeInTheDocument();        
    })
})