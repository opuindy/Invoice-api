const data = require('./invoices.json');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults({
  static: './build',
});
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
