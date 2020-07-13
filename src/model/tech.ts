import mongoose from 'mongoose'

const techSchema = new mongoose.Schema({})

const techModel = mongoose.model('technologie', techSchema)
export default techModel