import { z } from 'zod'
import mongoose from 'mongoose'
import { zodToMongooseSchema } from '../utils/zodToMongoose'

export const userZodSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email()
})

export type User = z.infer<typeof userZodSchema>

export const userMongooseSchema = zodToMongooseSchema(userZodSchema)
export const UserModel = mongoose.model<User>('User', userMongooseSchema)
