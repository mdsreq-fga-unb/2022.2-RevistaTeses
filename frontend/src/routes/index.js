import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';

const Private = ({ Home }) => {
    const { signed } = true;
  
    return signed > 0 ? <Home /> : <Login />;
  };

const RoutesApp = () => { 
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route> exact path="/home" element={<Private Item={Home} />}</Route>
                    <Route path="/" element={<Login />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
 };

 export default RoutesApp;