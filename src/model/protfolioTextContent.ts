import mongoose from 'mongoose'

const protfolioTextContent = new mongoose.Schema({}, { collection: 'portfolio-landing-cite-text' })

const protfolioTextContentModel = mongoose.model('portfolio-landing-cite-text', protfolioTextContent)
export default protfolioTextContentModel
