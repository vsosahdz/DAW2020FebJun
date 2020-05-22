const express=require('express')
const bodyParser=require('body-parser')
const app=express();

app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type')
    next();
})


app.get('/cartas',(req,res)=>{
    res.status(200).json({
      "cartas":[
        {
          "mazo":"Corazones",
          "numero":"2",
          "valor": 2
        },
        {
          "mazo":"Corazones",
          "numero":"K",
          "valor": 10
        }
    ]

    });
})

app.post('/carta',(req,res)=>{
  console.log(req.body);
  res.status(201).json({
    mensaje:'Post realizado con exito'
  })
})

app.listen(8081,()=>console.log("En linea"))