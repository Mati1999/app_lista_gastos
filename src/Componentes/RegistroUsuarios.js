import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader } from './../Elementos/Header';
import Boton from './../Elementos/Boton';
import { Formulario, Input, ContenedorBoton }
    from './../Elementos/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../imagenes/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
width:100%;
max-height: 9rem;
margin-bottom:1.25rem;
`;

const RegistroUsuarios = () => {
    return (
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/iniciar-sesion">Iniciar Sesion</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario>
                <Svg />
                <Input type="email" name="email" placeholder="Correo Electronico" />
                <Input type="password" name="password" placeholder="Contraseña" />
                <Input type="password" name="password2" placeholder="Repetir Contraseña" />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuarios;