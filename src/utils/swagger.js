exports.options = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Node.js fastify mongoDB',
      description: 'Node.js fastify mongoDB',
      version: '0.0.1',
    },
    externalDocs: {
      url: 'https://www.swagger.io',
      description: 'find more info here',
    },
  },
  host: 'localhost:5000',
  schemas: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};
