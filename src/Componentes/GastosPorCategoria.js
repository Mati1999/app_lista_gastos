import React from 'react';
import { Header, Titulo } from './../Elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../Elementos/BtnRegresar';
const GastosPorCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>
            <Header>
                <BtnRegresar />
                <Titulo>Gastos por categoria</Titulo>
            </Header>
        </>
    );
}

export default GastosPorCategoria;