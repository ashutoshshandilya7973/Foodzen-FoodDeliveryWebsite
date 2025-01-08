import mongoose from 'mongoose'

export const connectDB=async()=>{
     await mongoose.connect('Database_Url').then(()=>console.log("DB connected"));
}
