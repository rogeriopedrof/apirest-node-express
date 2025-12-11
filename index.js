import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res)=>{res.send('Tudo certo!')})

app.listen(port, ()=>{console.log('O servidor está rodando em http://localhost:3000/')})