import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema()

const projectModel = mongoose.model('projects', projectSchema)
export default projectModel


