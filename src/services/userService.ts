import { type User } from "../types/user";

let users: User[] = [];

export const getAllUsers = async (): Promise<User[]> => {
  return users;
};

export const createUser = async (user: User): Promise<User> => {
  users.push(user);
  return user;
};
