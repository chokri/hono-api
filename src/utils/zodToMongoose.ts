import mongoose from 'mongoose'
import { z, ZodObject, type ZodRawShape, type ZodTypeAny } from 'zod'

export function zodToMongooseSchema<T extends ZodObject<ZodRawShape>>(zodSchema: T): mongoose.Schema {
  const shape = zodSchema.shape
  const mongooseSchemaDef: Record<string, any> = {}

  for (const key in shape) {
    const field = shape[key]

    if (field instanceof z.ZodString) {
      mongooseSchemaDef[key] = { type: String, required: true }
    } else if (field instanceof z.ZodNumber) {
      mongooseSchemaDef[key] = { type: Number, required: true }
    } else if (field instanceof z.ZodBoolean) {
      mongooseSchemaDef[key] = { type: Boolean, required: true }
    } else {
      mongooseSchemaDef[key] = { type: mongoose.Schema.Types.Mixed, required: false }
    }
  }

  return new mongoose.Schema(mongooseSchemaDef)
}
