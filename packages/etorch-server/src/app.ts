import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser  from 'koa-bodyparser'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

// logger
app.use(async (ctx, next) => {
  await next()
  const responseTime = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${responseTime}`)
})

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(bodyParser());
app.use(cors());

router.get('/', async ctx => {
  ctx.body = 'Hello Koa!'
})

const migrate = require('./handlers/migrate')

router.use('/migrate', migrate.routes())

app.use(router.routes()).use(router.allowedMethods());

// 404
app.use(async (ctx, next) => {
  ctx.status = 404
  ctx.message = 'Page Not Found'
});

export = app