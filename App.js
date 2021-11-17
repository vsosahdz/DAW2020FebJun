import React from 'react';
import {Route,Routes,Link,NavLink,Outlet} from 'react-router-dom';

function Navegacion() {
  return (
    <div className="Navegacion container">
      <nav className="navbar navbar-expand-lg">        
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/dashboard">Tablero</Link></span>        
      </nav>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Encabezado(){
  return(
    <header>
      <span><NavLink to="/"> Menú</NavLink></span>
      <span><NavLink to="/puntajes"> Puntajes</NavLink></span>      
    </header>
  );
}

function Puntajes(){
  return(
    <div className="Puntuajes">Puntajes del juego</div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Ejemplo usando react-router-dom</h1>
      <Encabezado/>
      <Routes>
        <Route path="/" element={<Navegacion />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Juego />} />          
        </Route>
        <Route path="/puntajes" element={<Puntajes />}></Route>        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}


function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <h2>About</h2>
    </div>
  );
}

const IP="localhost"
const Port="8081"

class Juego extends React.Component {
  
  constructor(){
    super();
    this.state={
      juego:null
    }
  }
  
  componentDidMount(){
    fetch(`http://${IP}:${Port}/juego`)
    .then(res=>res.json())
    .then(resData=>{
      console.log(resData)
      this.setState({
        juego:resData
      });
    })
  }

  render(){
    console.log(this.state.juego)
    return (
      <div className="Juego">
        <br/>
        <h2>Tablero</h2>
      </div>
    );
  }
}

function Error404(){
  return(
    <div className="Error404">
      <h1>404</h1>
      <Link to="/">Ir a la página principal</Link>
    </div>
  )
}

export default App;