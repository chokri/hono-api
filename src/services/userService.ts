import { UserModel, type User } from '../schemas/userSchema'

export const getAllUsers = async (): Promise<User[]> => {
  return await UserModel.find().lean()
}

export const createUser = async (user: User): Promise<User> => {
  return await UserModel.create(user)
}
