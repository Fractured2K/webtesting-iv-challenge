const db = require('../database/dbConfig');

module.exports = {
	create,
	find,
	remove
};

async function create(student) {
	const [id] = await db('students').insert(student);

	return db('students')
		.where({ id })
		.first();
}

async function find(id) {
	return db('students')
		.where({ id })
		.first();
}

async function remove(id) {
	return db('students')
		.where({ id })
		.del();
}
