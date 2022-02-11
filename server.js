const express = require('express')

const routes = require('./routes')

//constante de conexion a mysql
const mysql = require('mysql')

//conexion a mysql
const myconn = require('express-myconnection')

const app = express();
app.set('port', process.env.PORT || 9000)

const dbOptions= {
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'password',
    database: 'AlmacenFarradio'
}

//midelware
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to mi Api')
})

app.use('/api', routes)


//server runing
app.listen(app.get('port'), ()=> 
    console.log('server listerin in port', app.get('port'))
);