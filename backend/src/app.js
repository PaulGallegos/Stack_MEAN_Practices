const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.set('port',process.env.PORT || 3000); //declarar puerto

app.use(cors())
app.use(morgan('dev')); //middleware para mostrar los crud en consola
app.use(express.json());  //para que express pueda entender los json que se mandan
app.use(express.urlencoded({extended:false})); //

app.use("/employees",require('./routes/employees.routes'));

module.exports = app;