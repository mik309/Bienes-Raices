import express from 'express'
import usuarioRoutes from "./routes/usuarioRoutes.js"

//Create the app
const app = express()

//Pug
app.set('view engine', 'pug')
app.set('views', './views')

//Carpeta publica
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)


//Port
const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
})