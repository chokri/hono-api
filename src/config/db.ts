import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...', process.env.MONGODB_URI!)
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('✅ MongoDB connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}
