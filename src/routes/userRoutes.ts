import { Hono } from "hono";
import { getUsers, createUser } from "../controllers/userController";
import { validateUser } from "../validators/userValidator";

const userRoutes = new Hono();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", validateUser, createUser);

export default userRoutes;
