import { Router } from "express";
import passport from "passport";

const userRouter = Router()

userRouter.get('/register', async(req, res) => {
    res.render('register')
})

userRouter.post('/register', passport.authenticate('register'), async (req,res) => {
    try {
        if(!req.user) {
            res.status(400).send({mensaje: 'usuario ya existente'})
        }
        return res.render('user', {first_name: req.user.first_name, last_name: req.user.last_name, age: req.user.age, email: req.user.email, isLoged: req.session.email != undefined})
    } catch (error) {
        res.status(500).send({mensaje: `error al crear usuario ${error}`})
    }
})

userRouter.get('/details', async(req,res) => {
    res.render('user', {first_name: req.user.first_name, last_name: req.user.last_name, age: req.user.age, email: req.user.email, isLoged: req.session.email != undefined})
})


export default userRouter