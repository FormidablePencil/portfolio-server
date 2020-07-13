import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({})

const projectModel = mongoose.model('project', projectSchema)
export default projectModel


