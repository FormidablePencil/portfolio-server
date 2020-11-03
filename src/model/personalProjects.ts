import mongoose from 'mongoose'
import { projectSchema } from './project'

const personalProjectModel = mongoose.model('personal-projects', projectSchema)
export default personalProjectModel
