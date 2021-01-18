import React from 'react';
import { Header, Titulo } from './../Elementos/Header';
import { Helmet } from 'react-helmet';
import BtnRegresar from './../Elementos/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastosDelMesPorCategoria from './../Hooks/useObtenerGastosDelMesPorCategoria';
import { ListaDeCategorias, ElementoListaCategorias, Categoria, Valor } from './../Elementos/ElementosDeLista';
import IconoCategoria from './../Elementos/IconoCategoria';
import convertirAMoneda from './../Funciones/ConvertirAMoneda';

const GastosPorCategoria = () => {

    const gastosPorCategoria = useObtenerGastosDelMesPorCategoria();
    console.log(gastosPorCategoria);

    return (
        <>
            <Helmet>
                <title>Gastos por categoria</title>
            </Helmet>
            <Header>
                <BtnRegresar />
                <Titulo>Gastos por categoria</Titulo>
            </Header>

            <ListaDeCategorias>
                {gastosPorCategoria.map((elemento, index) => {
                    return (
                        <ElementoListaCategorias key={index}>
                            <Categoria>
                                <IconoCategoria id={elemento.categoria} />
                                {elemento.categoria}
                            </Categoria>
                            <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>
                        </ElementoListaCategorias>
                    );
                })}
            </ListaDeCategorias>

            <BarraTotalGastado />
        </>
    );
}

export default GastosPorCategoria;