import mongoose from 'mongoose'

export const connectDB=async()=>{
     await mongoose.connect('mongodb+srv://ashutoshjha7973:BamBam7973@cluster0.p9mum.mongodb.net/ashu-ecom').then(()=>console.log("DB connected"));
}
