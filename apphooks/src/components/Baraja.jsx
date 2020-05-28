import React,{useState,useEffect,useReducer} from 'react';

const Carta=({carta,tirarCarta})=>{
    useEffect(()=>{
        console.log('Effect!')
        return ()=>{console.log('Desaparecí!')} //componentWillUnmount
    },[])
    
    return (
        <div>
            <h2>{carta}</h2>
            <button onClick={()=>tirarCarta(carta)}>X</button>
        </div>
        )
}

const cartasReducer = (state,action)=>{
    switch(action.type){
        case 'PEDIR_CARTA':
            return [
        ...state,action.carta
        ]
        case 'TIRAR_CARTA':
            return state.filter((c)=>c!==action.carta)
        
    }
}

const Baraja=()=>{
  //const [cartas,setCartas]=useState([]); 
  const [cartas,dispatch]=useReducer(cartasReducer,[]); 
  const [carta,setCarta]=useState('');
  
  const pedirCarta=(e)=>{
      e.preventDefault();
      dispatch({
          type:'PEDIR_CARTA',
          carta
      })
        setCarta('');
  }
  
  const tirarCarta=(carta)=>{
      dispatch({
          type:'TIRAR_CARTA',
          carta
      })
  }
  
  return(
      <div>
        <h1>Cartas</h1>
        {cartas.map((c,i)=>(
            <Carta key={i} carta={c} tirarCarta={tirarCarta}/>))}
        <p>Agregar carta</p>
        <form onSubmit={pedirCarta}>
            <input value={carta} onChange={(e)=>setCarta(e.target.value)}/>
            <button>Agregar</button>
        </form>
      </div>
    )
}

export default Baraja;