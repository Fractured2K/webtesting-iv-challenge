const db = require('../database/dbConfig');

module.exports = {
	create,
	remove
};

async function create(student) {
	const [id] = db('students').insert(student);

	return db('students')
		.where({ id })
		.first();
}

async function remove(id) {
	return db('students')
		.where({ id })
		.del();
}
