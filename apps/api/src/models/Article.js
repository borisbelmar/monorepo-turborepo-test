import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Article', ArticleSchema)