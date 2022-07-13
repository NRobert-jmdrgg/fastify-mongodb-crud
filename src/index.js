const PORT = 5000;

const fastify = require('fastify')({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        ignore: 'reqId',
      },
    },
  },
});

const productsRoutes = require('./routes/products.routes');

fastify.get('/', (req, reply) => {
  reply.send({ hello: 'world' });
});

productsRoutes.forEach((productRoute) => fastify.route(productRoute));

const start = async () => {
  fastify.listen(PORT);
  fastify.log.info(`server listening on ${PORT}`);
};

const swagger = require('./utils/swagger');
require('./utils/mongoose');

fastify.register(require('@fastify/swagger'), swagger.options);

start();
