import React, { useState } from 'react';
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

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                establecerCorreo(e.target.value);
                break;
            case 'password':
                establecerPassword(e.target.value);
                break;
            case 'password2':
                establecerPassword2(e.target.value);
                break;
            default:
                break;
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos del lado del cliente que el correo sea  valido.

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            console.log('Ingresa un correo valido');
            return;
        };
        if (correo === "" || password === "" || password2 === "") {
            console.log("Porr favor rellene todos los datos");
            return;
        }
        if (password !== password2) {
            console.log('Las contraseñas no son iguales');
            return;
        }
        console.log('Registramos usuario');
    }

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

            <Formulario onSubmit={handleSubmit}>
                <Svg />
                <Input type="email" name="email" placeholder="Correo Electronico" value={correo} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Contraseña" value={password} onChange={handleChange} />
                <Input type="password" name="password2" placeholder="Repetir Contraseña" value={password2} onChange={handleChange} />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default RegistroUsuarios;