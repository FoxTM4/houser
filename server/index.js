const express = require('express');
const bodyParser= require('body-parser');
const ctrl = require('./controller');
const port = 8888;

const massive = require('massive');
const controller = require ('./controller')

const app = express();
app.use(bodyParser.json())

app.get('/api/listings')


app.post('/api/houses',controller.create)
// app.get('/api/houses/:id', products_controller.getOne)
// app.get('/api/houses/',products_controller.getAll)
app.delete('/api/houses/:id', controller.delete)


app.listen(port, ()=>console.log(`Ported on ${port}`))