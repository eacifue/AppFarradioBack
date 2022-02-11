const express = require('express')
const routes = express.Router()

// get productos
routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Productos', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//insert productos 
routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Productos set ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)
            res.send('Producto agregado')
        })
    })
})

//delete productos
routes.delete('/:idProductos', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Productos WHERE IdProductos = ?', [req.params.idProductos],(err, rows)=>{
            if(err) return res.send(err)
            res.send('Producto eliminado')
        })
    })
})


module.exports = routes