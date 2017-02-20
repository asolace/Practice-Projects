const http = require('http');
let express = require('express');
let server = express();
let path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

server.set('view engine', 'ejs');
server.set('views', path.resolve(__dirname, 'client', 'views'));

server.use(express.static(path.resolve(__dirname, 'client')));

server.get('/', (req, res) => {
	res.render('index.ejs');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

