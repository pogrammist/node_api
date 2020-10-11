const applet = require('../app/controllers/applet');
const products = require('../app/controllers/products');

module.exports = (app) => {
    app.get('/', applet.getStart);
    app.get('/products', products.getAll);
    app.post('/products', products.create);
    app.put('/products/:id', products.update);
    app.delete('/products/:id', products.remove);
};