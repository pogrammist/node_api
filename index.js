const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const products = [
	{
		id: 1,
		name: 'phone',
		price: 300,
	},
	{
		id: 2,
		name: 'tablet',
		price: 700,
	},
];

app.get('/', (req, res) => res.send('Hi, World!'));

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
	products.push(req.body);
	res.json(req.body);
});
app.put('/products/:id', (req, res) => {
	const product = products.find(p => p.id === +req.params.id);
	const productIndex = products.indexOf(product);
	const newProduct = { ...product, ...req.body };
	products[productIndex] = newProduct;
	res.json(newProduct);
});
app.delete('/products/:id', (req, res) => {
	const product = products.find(p => p.id === +req.params.id);
	const productIndex = products.indexOf(product);
	products.splice(productIndex, 1);
	res.json({ success: true });
});

// eslint-disable-next-line
app.listen(3000, () => console.log('Listenig on port 3000...'));