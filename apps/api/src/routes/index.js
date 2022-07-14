import Router from '@koa/router'
import articlesRouter from './articles.js'
import authRouter from './auth.js'

const router = new Router()

router.use('/v1/articles', articlesRouter.routes())
router.use('/v1/auth', authRouter.routes())

router.get('/', ctx => {
  ctx.body = {
    app: process.env.npm_package_name,
    version: process.env.npm_package_version
  }
})

export default router
