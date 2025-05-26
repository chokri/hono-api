import { Hono } from "hono";
import userRoutes from "./routes/userRoutes";

const app = new Hono();

app.route("/api/v1", userRoutes);

export default app;
