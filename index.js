import express from 'express'
import usuarioRoutes from "./routes/usuarioRoutes.js"
import db from './config/db.js'

//Create the app
const app = express()

//Enable forms data
app.use( express.urlencoded({extended:true}))

//DB connection
try{
    await db.authenticate()
    db.sync()
    console.log('Connection suceed')
}catch(error){
    console.log(error)
}

//Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Public directory
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)


//Port
const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
})