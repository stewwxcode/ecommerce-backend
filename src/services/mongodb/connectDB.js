import mongoose from 'mongoose'

export const connectDB = async ()=>{
    try{
          await mongoose.connect(process.env.DB_URI);
          console.log('Connected to Database')
    }catch (error) {
        console.log(error)
    }

}