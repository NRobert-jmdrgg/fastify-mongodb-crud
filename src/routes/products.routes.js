const productCtrl = require('../controllers/product.controller');

const routes = [
  {
    url: '/products',
    method: 'GET',
    handler: productCtrl.getProducts,
  },
  {
    url: '/products/:id',
    method: 'GET',
    handler: productCtrl.getProduct,
  },
  {
    url: '/products',
    method: 'POST',
    handler: productCtrl.addProduct,
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: productCtrl.deleteProduct,
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: productCtrl.updateProduct,
  },
];

module.exports = routes;
