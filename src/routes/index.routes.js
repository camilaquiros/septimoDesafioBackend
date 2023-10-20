import { Router } from "express";
import productsRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import userRouter from './routes/users.routes.js'
import sessionRouter from './routes/sessions.routes.js'

const router = Router()

//rutas
router.use('/', sessionRouter)
router.use('api/users', userRouter)
router.use('api/products', productsRouter)
router.use('api/carts', cartRouter)

export default router