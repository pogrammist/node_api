const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hi, World!'));

// eslint-disable-next-line
app.listen(3000, () => console.log('Listenig on port 3000...'));