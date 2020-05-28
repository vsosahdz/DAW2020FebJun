import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';


//agregar-partida

function AgregarPartida(){
  return(
    <h1>Agregar partida</h1>
    );
}

function UnirsePartida(props){
  return(
    <h1>Unirse partida {props.id}</h1>
    );
}

function Presentacion(){
  return (
    <h1>Black Jack 21</h1>
  );
}

function Encabezado(){
  return(
    <header>
      <NavLink to="/" activeClassName="is-active" exact> Presentación</NavLink>
      <NavLink to="/agregar-partida" activeClassName="is-active"> Agregar Partida</NavLink>
      <NavLink to="/unirse-partida" activeClassName="is-active"> Unirse Partida</NavLink>
    </header>
  );
}



function e404(){
  return(
    <div>
      <h1>404</h1>
      <Link to="/">Ir a inicio</Link>
    </div>
  )
}


function App() {
  return(
      <BrowserRouter>
        <Encabezado />
        <Switch>
          <Route path='/' component={Presentacion} exact/>
          <Route path='/agregar-partida' component={AgregarPartida} />
          <Route path='/unirse-partida' render={()=><UnirsePartida id="1" />}/>
          <Route component={e404}/>;
        </Switch>
      </BrowserRouter>
  )
}

export default App;
