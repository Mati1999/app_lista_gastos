import React from 'react';
import { Header, Titulo } from './../Elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../Elementos/BtnRegresar';

const ListaDeGastos = () => {
    return (
        <>
            <Helmet>
                <title>ListaDeGastos</title>
            </Helmet>
            <Header>
                <BtnRegresar />
                <Titulo>ListaDeGastos</Titulo>
            </Header>
        </>
    );
}

export default ListaDeGastos;