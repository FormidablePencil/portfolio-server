import mongoose from 'mongoose'

export const projectSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  status: Number,
  technologies: Array,
  images: Array,
  links: Object,
  relavent: Object,
  showInPortfolio: Boolean,
  rolls: Object,
  video: String,
})

const ProjectModel = mongoose.model('my-projects', projectSchema)
export default ProjectModel


