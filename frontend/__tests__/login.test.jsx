import { fireEvent, render, screen} from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';
import "@testing-library/jest-dom";
import "@faker-js/faker";

import Login from '../src/pages/login';

/* Testes para se fazer com o Login:
    0. [x] Se renderiza a pagina
    1. [x] Deve utilizar email e senha para realizar o login (2)
    2. [x] Caso os dados estejam incorretos, o login não pode ser realizado e deve retornar uma mensagem (2)
    3. [] O usuário deve estar autenticado por cookies (2)
*/ 

const renderLogin = () =>{
    render( 
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
        );
}

describe('Testar Login',()=>{
    it('Renderizar a Area de Login',()=>{
        renderLogin();

        expect(screen.getByTestId("area_login")).toBeInTheDocument();
    })

    it('Email e senha para realizar o login', async () =>{
        renderLogin();

        const testEmail = 'jpmorbeck45@gmail.com';
        const testPassword = '123456';

        const inputLoginEmail = screen.getByTestId("email_login_input");
        const inputLoginPassword = screen.getByTestId("password_login_input");
        const buttonEntrar = screen.getByTestId("entrarButton");

        fireEvent.change(inputLoginEmail,{target: {value: testEmail}})
        fireEvent.click(buttonEntrar);
        
        expect(await screen.findByText("E-mail ou senha incorreta")).toBeInTheDocument();
        
        fireEvent.change(inputLoginEmail,{target: {value: ""}})
        fireEvent.change(inputLoginPassword,{target: {value: testPassword}})
        fireEvent.click(buttonEntrar);
        expect(await screen.findByText("E-mail ou senha incorreta")).toBeInTheDocument();

        fireEvent.change(inputLoginEmail,{target: {value: testEmail}})
        fireEvent.change(inputLoginPassword,{target: {value: testPassword}})
        fireEvent.click(buttonEntrar);
        expect(await screen.findByText("E-mail ou senha incorreta")).not.toBeInTheDocument();
    })

    it('Dados incorretos, deve retornar uma mensagem', async() =>{
        renderLogin();

        const testEmail = faker.internet.email();
        const testPassword = faker.internet.password();

        const inputLoginEmail = screen.getByTestId("email_login_input");
        const inputLoginPassword = screen.getByTestId("password_login_input");
        const buttonEntrar = screen.getByTestId("entrarButton");

        fireEvent.change(inputLoginEmail,{target: {value: testEmail}})
        fireEvent.change(inputLoginPassword,{target: {value: testPassword}})
        fireEvent.click(buttonEntrar);
        expect(await screen.findByText("E-mail ou senha incorreta")).toBeInTheDocument();
    })
})