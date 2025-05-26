import { type Context } from "hono";
import * as userService from "../services/userService";

export const getUsers = async (c: Context) => {
  const users = await userService.getAllUsers();
  return c.json(users);
};

export const createUser = async (c: Context) => {
  const body = await c.req.json();
  console.log({body})
  const user = await userService.createUser(body);
  return c.json(user, 201);
};
