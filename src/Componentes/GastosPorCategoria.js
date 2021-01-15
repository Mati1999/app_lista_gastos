import React from 'react';
import { Header, Titulo } from './../Elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../Elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';

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
            <BarraTotalGastado />
        </>
    );
}

export default GastosPorCategoria;