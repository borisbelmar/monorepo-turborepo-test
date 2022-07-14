import Joi from 'joi'
import slugify from 'slugify'
import Article from '../models/Article.js'
import ServerError from '../errors/ServerError.js'

const getArticleControllers = () => {
  const getAll = async ctx => {
    const userId = ctx.query.user
    const findParams = userId ? { user: userId } : {}
    const articles = await Article.find(findParams).populate('user').exec()
    ctx.body = articles
  }

  const getById = async ctx => {
    const article = await Article.findById(ctx.params.id)
    if (!article) {
      throw new ServerError(404)
    }
    ctx.body = article
  }

  const create = async ctx => {
    const payload = ctx.request.body

    const schema = Joi.object({
      title: Joi.string().required(),
      slug: Joi.string().regex(/^[a-z0-9-]+$/),
      content: Joi.string().required(),
      image: Joi.string().uri().required()
    })

    try {
      await schema.validateAsync(payload)
    } catch (e) {
      throw new ServerError(400, e.message)
    }

    const article = new Article({
      ...payload,
      slug: slugify(payload.slug || payload.title),
      user: ctx.state.userSession.sub
    })

    try {
      const createdArticle = await article.save()
      ctx.body = createdArticle
      ctx.status = 201
    } catch (e) {
      if (e.code === 11000) {
        throw new ServerError(409)
      }
      throw new ServerError(500)
    }
  }

  return {
    getAll,
    getById,
    create
  }
}

export default getArticleControllers