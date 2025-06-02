import { serve } from '@hono/node-server'
import 'dotenv/config'
import app from './app'
import { connectDB } from './config/db'
import { loggerMiddleware } from './middlewares/logger'

const port = parseInt(process.env.PORT || '3000')

app.use('*', loggerMiddleware)
await connectDB()

console.log(`🚀 Server ready at http://localhost:${port}`)
serve({ fetch: app.fetch, port })
