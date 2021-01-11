import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './Elementos/Contenedor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditarGasto from './Componentes/EditarGasto';
import GastosPorCategoria from './Componentes/GastosPorCategoria';
import InicioSesion from './Componentes/InicioSesion';
import ListaDeGastos from './Componentes/ListaDeGastos';
import RegistroUsuarios from './Componentes/RegistroUsuarios';
import { Helmet } from 'react-helmet';
import favicon from './imagenes/logo.png'
import Fondo from './Elementos/Fondo';
import { AuthProvider } from './Contextos/AuthContext';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path="/iniciar-sesion" component={InicioSesion} />
              <Route path="/crear-cuenta" component={RegistroUsuarios} />
              <Route path="/categorias" component={GastosPorCategoria} />
              <Route path="/lista" component={ListaDeGastos} />
              <Route path="/editar/:id" component={EditarGasto} />
              <Route path="/" component={App} />
            </Switch>
          </Contenedor>
        </BrowserRouter>
      </AuthProvider>

      <Fondo />
    </>

  );
}


ReactDOM.render(<Index />, document.getElementById('root'));
