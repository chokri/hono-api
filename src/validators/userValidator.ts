import { zValidator } from '@hono/zod-validator'
import { userZodSchema } from '../schemas/userSchema'

export const validateUser = zValidator('json', userZodSchema)
