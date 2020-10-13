require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('./app/models')
cfg = require('./config');

const app = express();
cfg.express(app);
cfg.routes(app);

const { appPort } = cfg.applet;

mongoose.connect(process.env.DB_CONN,
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => app.listen(
		appPort,
		() => console.log(`Listenig on port ${appPort}...`)
	))
	.catch(err => console.error(`Error connecting to mongo`, err));