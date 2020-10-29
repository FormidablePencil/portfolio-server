import mongoose from 'mongoose'

const personalProjectSchema = new mongoose.Schema({
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

const personalProjectModel = mongoose.model('personal-projects', personalProjectSchema)
export default personalProjectModel
