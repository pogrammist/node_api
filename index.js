require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', {
	id: Number,
	name: String,
	price: mongoose.Schema.Types.Decimal128,
});

const app = express();
app.use(bodyParser.json());

const message = `Hi, it's my first test api!
Use Postman for send requests, please.
Available routes /product & /products/id
Methods GET POST PUT DELETE
Object Product
{
	id: Number,
	name: String,
	price: mongoose.Schema.Types.Decimal128,
}
`

app.get('/', (req, res) => res.send(message));

app.get('/products',
	(req, res) => {
		Product.find()
			.exec()
			.then(products => res.json(products))
	});

app.post('/products',
	(req, res) => {
		Product.create(req.body)
			.then(createPoduct => res.json(createPoduct))
	});

app.put('/products/:id',
	(req, res) => {
		Product.findOneAndUpdate({ id: req.params.id }, req.body)
			.exec()
			.then(product => res.json(product))
	});

app.delete('/products/:id',
	(req, res) => {
		Product.deleteOne({ id: req.params.id })
			.exec()
			.then(() => res.json({ success: true }))
	});

// eslint-disable-next-line
app.listen(3000, () => console.log('Listenig on port 3000...'));