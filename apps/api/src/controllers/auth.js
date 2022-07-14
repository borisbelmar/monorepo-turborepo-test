import bcrypt from 'bcryptjs'
import Joi from 'joi'
import User from '../models/User.js'
import { jwtSign } from '../lib/jwt.js'
import ServerError from '../errors/ServerError.js'

const getAuthControllers = () => {
  const register = async ctx => {
    const payload = ctx.request.body

    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    })

    try {
      await schema.validateAsync(payload)
    } catch (e) {
      throw new ServerError(400, e.message)
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(payload.password, salt)

    const user = new User({ ...payload, password: hash })

    try {
      const createdUser = await user.save()
      ctx.body = createdUser
      ctx.status = 201
    } catch (e) {
      if (e.code === 11000) {
        throw new ServerError(409)
      }
      throw new ServerError(500)
    }
  }

  const login = async ctx => {
    const payload = ctx.request.body

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    })

    try {
      await schema.validateAsync()
    } catch (err) {
      throw new ServerError(401)
    }

    const user = await User.findOne({ email: payload.email })

    if (!user || !bcrypt.compareSync(payload.password, user.password)) {
      throw new ServerError(401)
    }

    const accessToken = jwtSign({
      sub: user._id,
      cid: user._id
    })

    ctx.body = {
      accessToken
    }
    ctx.status = 200
  }

  return {
    register,
    login
  }
}

export default getAuthControllers