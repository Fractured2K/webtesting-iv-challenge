const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
	res.status(200).json({ message: 'Sanity check' })
);

server.listen(5000, () =>
	console.log('Server running on http://localhost:5000')
);
