const db = require('../database/dbConfig');

module.exports = {
	create
};

async function create(student) {
	const [id] = db('students').insert(student);

	return db('students')
		.where({ id })
		.first();
}
