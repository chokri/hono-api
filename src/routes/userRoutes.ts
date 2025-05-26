import { Hono } from 'hono'
import { getUsers, createUser } from '../controllers/userController'
import { validateUser } from '../validators/userValidator'
import { swaggerDocs } from '../docs/swagger'

const userRoutes = new Hono()

userRoutes.route('/docs', swaggerDocs)
userRoutes.get('/users', getUsers)
userRoutes.post('/users', validateUser, createUser)

export default userRoutes
