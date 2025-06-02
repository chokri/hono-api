import { Hono } from 'hono'
import { createUser, getUsers } from '../controllers/userController'
import { swaggerDocs } from '../docs/swagger'
import { validateUser } from '../validators/userValidator'

const userRoutes = new Hono()

userRoutes.route('/docs', swaggerDocs)
userRoutes.get('/users', getUsers)
userRoutes.post('/users', validateUser, createUser)

export default userRoutes
