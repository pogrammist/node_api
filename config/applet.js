const appPort = 3000;

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
module.exports = { message, appPort };