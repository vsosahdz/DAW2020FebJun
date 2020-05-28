import React,{useState,useEffect} from 'react';
import './App.css';
import Baraja from './components/Baraja';
//Hooks
function App(props) {
  //const [ncartas,setNcartas]=useState(props.ninicial);
  //const [jugador,setJugador]=useState('');
  const [state,setState]=useState({
    ncartas:props.ninicial,
    jugador:''
  });
  
  
  //ComponentDidMount
  useEffect(()=>{
    console.log('Effect componentDidMount!')
  },[])
  
  //ComponentDidUpdate
  useEffect(()=>{
    if(state.jugador!=''){
      console.log('Effect componentDidUpdate!')
    }
  })
  
   return (
    <div>
       <input value={state.jugador} onChange={(e)=>setState({...state,jugador:e.target.value})}/>
     <p> Numero de cartas: {state.ncartas} del jugador: {state.jugador}</p>
     <button onClick={()=>setState({...state,ncartas:state.ncartas+1})}> Pedir carta</button>
     <Baraja />
    </div>
  );
}

export default App;
