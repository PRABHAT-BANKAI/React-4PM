const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const port = 8082

server.use(middleware)
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})