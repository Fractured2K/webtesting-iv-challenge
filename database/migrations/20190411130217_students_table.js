exports.up = function(knex) {
	knex.schema.createTable('students', student => {
		student.increments();

		student.string('name', 255).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('students');
};
