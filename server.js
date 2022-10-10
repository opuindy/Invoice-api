const data = require('./db.js');
const server = jsonServer.create();
const router = jsonServer.route(data);
const middlewares = jsonServer.default();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
