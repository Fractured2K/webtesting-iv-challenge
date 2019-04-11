const express = require('express');

const Students = require('./models/Students');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
	res.status(200).json({ message: 'Sanity check' })
);

server.post('/students', async (req, res) => {
	try {
		const student = await Students.create(req.body);
		res.status(201).json(student);
	} catch (error) {
		res.status(500).json(error);
	}
});

server.listen(5000, () =>
	console.log('Server running on http://localhost:5000')
);
