import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:tomastauscher@e-commerce.pgblped.mongodb.net/coder-bank")
        console.log("Mongo Conectado")

    } catch (error){
        console.log("Error al conectar Mongo")
    }
}