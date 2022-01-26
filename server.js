const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()
//below is ssh destination or server port running
app.use(
  '/sth on your api address call', //sth on api address which is specific to make proxy
  createProxyMiddleware({
    target: 'http://localhost:3005/',
    changeOrigin: true,
    pathRewrite: { '^/sth ro remove if needed': '' } //if any rewrite needed for example removing or adding to server request
  })
)

//below is localhost address
app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:3000/',
    changeOrigin: true
  })
)
//port to use on browser
app.listen(3004)
