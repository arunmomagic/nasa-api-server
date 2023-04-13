const express= require('express');
const cors=require('cors');
const planetsRouter=require('./routers/planets/planets.router');
const app=express();

// app.use(cors({
//     origin:['http://localhost:3000','http://172.16.34.108:3000','http://172.16.34.121:3000'],
// }));

app.use(cors());
app.use(express.json());
app.use(planetsRouter);

module.exports =app;