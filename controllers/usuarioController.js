import { check, validationResult } from 'express-validator'
import Usuario from "../models/Usuario.js"


const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina:'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina:'Crear Cuenta'
    })
}

const registrar = async (req, res) => {
    //Validation
    await check('nombre').notEmpty().withMessage('Name cannot be empty').run(req)
    await check('email').isEmail().withMessage('Invalid email').run(req)
    await check('password').isLength({min:6}).withMessage('Password must have at least 6 characters').run(req)
    await check('repetir_password').equals('password').withMessage('Password not match').run(req)

    let resultado = validationResult(req)

    res.json(resultado.array())


    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina:'Recupera tu acceso a Bienes Raices'
    })
}


export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}