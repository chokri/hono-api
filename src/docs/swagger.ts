import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi'

const app = new OpenAPIHono()

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})

app.openapi(
  createRoute({
    method: 'get',
    path: '/users',
    responses: {
      200: {
        description: 'List of users',
        content: {
          'application/json': {
            schema: z.array(userSchema)
          }
        }
      }
    }
  }),
  async (c) => {
    return c.json([])
  }
)

export const swaggerDocs = app
