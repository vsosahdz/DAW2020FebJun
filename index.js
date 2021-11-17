const express=require('express');
const cors = require('cors')
const app=express()

app.use(cors())

app.use(express.json()); 

let juego={
    jugador1:2,
    jugador2:2,
    jugador3:2
}

const cartas=[
    {
        mazo:"Corazones",
        descripcion:"K",
        valor:"10"
    },{
        mazo:"Espadas",
        descripcion:"Q",
        valor:"10"
    }
]

app.get('/juego',(req,res)=>{
    console.log('conexion');
    res.status(200).json(juego);
});

app.post('/carta/:idj',(req,res)=>{
  console.log(req.body);
  const idj=req.params.idj;
  switch(idj) {
  case '1':
    juego.jugador1++;
    break;
  case '2':
    juego.jugador2++;
    break;
  case '3':
    juego.jugador3++;
    break;
        
  }
  res.status(200).json({
    message: 'Actualizacion',
    post: { jugador: idj}
  });
  return;
});



app.use((req,res)=>{
   res.status(404).send('<h1>Página no encontrada 404</h1>');
});

app.listen(8081,()=>console.log('En línea'));