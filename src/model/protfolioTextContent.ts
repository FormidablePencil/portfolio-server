import mongoose from 'mongoose'

export const portfolioTextContentSchema = new mongoose.Schema({ bio: String }, { collection: 'portfolio-landing-cite-text' })

const ProtfolioTextContentModel = mongoose.model('portfolio-landing-cite-text', portfolioTextContentSchema)
export default ProtfolioTextContentModel
