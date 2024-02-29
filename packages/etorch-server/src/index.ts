import app from './app'
import http from 'http'

import '@etorch/shared-utils'

const PORT = process.env.PORT || '3000'
const server = http.createServer(app.callback())

server.listen(PORT)

server.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
