import { z } from "zod";
import { type Context, type MiddlewareHandler } from "hono";

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  email: z.string().email(),
});

export const validateUser: MiddlewareHandler = async (c, next) => {
  const body = await c.req.json();
  const result = userSchema.safeParse(body);

  if (!result.success) {
    return c.json({ error: result.error.format() }, 400);
  }

  await next();
};
