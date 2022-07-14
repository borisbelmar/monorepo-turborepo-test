import Router from '@koa/router'
import getArticlesControllers from '../controllers/articles.js'
import authRequired from '../middlewares/authRequired.js'

const articlesRouter = new Router()
const controllers = getArticlesControllers()

articlesRouter.get('/', controllers.getAll)
articlesRouter.get('/:id', controllers.getById)
articlesRouter.post('/', authRequired, controllers.create)

export default articlesRouter
