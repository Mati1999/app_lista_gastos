import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Puntos } from './../imagenes/puntos.svg';





const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;

const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const Fondo = () => {
    return (
        <>
            <PuntosArriba />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path
                    fillOpacity="1"
                    d="M0,64L60,64C120,64,240,64,360,96C480,128,600,192,720,218.7C840,245,960,235,1080,234.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </Svg>
            <PuntosAbajo />
        </>
    );
}

export default Fondo;