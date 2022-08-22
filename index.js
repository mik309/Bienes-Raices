import express from 'express'
import usuarioRoutes from "./routes/usuarioRoutes.js"

//Create the app
const app = express()

//Routing
app.use('/', usuarioRoutes)

//Port
const port = 3000

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
})