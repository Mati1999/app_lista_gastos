import React from 'react';
import { Header, Titulo } from './../Elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../Elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import FormularioGasto from './FormularioGasto';
import { useParams } from 'react-router-dom';
import useObtenerGasto from './../Hooks/useObtenerGasto';

const EditarGasto = () => {

    // Extraemos el id del gasto
    const { id } = useParams();
    const [gasto] = useObtenerGasto(id);

    return (
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>
            <Header>
                <BtnRegresar ruta="/lista" />
                <Titulo>Editar Gasto</Titulo>
            </Header>
            <FormularioGasto gasto={gasto} />
            <BarraTotalGastado />
        </>
    );
}

export default EditarGasto;