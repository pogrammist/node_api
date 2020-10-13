const message = `Hi, it's my first test api! Include jwt & refreshToken

Use Postman for send requests, please.

Available routes to users: 
/signin
Methods POST
Body User
{
    email: String,
    password: String,
}

/refresh-tokens
Headers Authorization "Bearer eyJhbGciOiJIUzI1NiJ9.NWY4NGEzMWZmZjc1NmUyYzMzODRmYzI2.TDXgW0Mv--sGRzcOre0mYb7Fy5W8DRMJn82xPTQ7Dj4"

Result Tokens
{
    "accessToken": "eyJhbGciOiJIUzI1NiJ9.NWY4NGEzMWZmZjc1NmUyYzMzODRmYzI2.TDXgW0Mv--sGRzcOre0mYb7Fy5W8DRMJn82xPTQ7Dj4",
    "refreshToken": "yZXNoIiwiaWF0IjoxNjAyNTk3MzI2LCJleHAiOjE2MDI1OTc1MDZ9.wOE3Qhh99814_i62AZvRL219vvt8xZIxKLDZnWKITAE"
}

Available routes to products: 
/product & /products/id
Methods GET POST PUT DELETE
Body Product
{
	id: Number,
	name: String,
	price: mongoose.Schema.Types.Decimal128,
}

Result Products
[
    {
        "_id": "5f835506132b4575db952323",
        "id": 1,
        "name": "tablet",
        "price": {
            "$numberDecimal": "1500"
        },
        "__v": 0
    }
]
`
module.exports = {
	message,
	appPort: 3000,
	jwt: {
		secret: 'useSecret',
		tokens: {
			access: {
				type: 'access',
				expiresIn: '2m'
			},
			refresh: {
				type: 'refresh',
				expiresIn: '3m'
			}
		}
	}
};