const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

describe('Server.js tests', () => {
	describe('clean up test database', async () => {
		beforeEach(async () => {
			await db('students').truncate();
		});
	});

	describe('GET /', () => {
		it('should respond with 200OK', () => {
			return request(server)
				.get('/')
				.expect(200);
		});
	});

	describe('POST /students', () => {
		it('should create a student and respond with 201', async () => {
			const student = { name: 'John Smith' };
			const response = await request(server)
				.post('/student')
				.send(student);

			expect(response.status).toBe(201);
		});

		it('should respond with 400 when body formatting is incorrect', async () => {
			const student = {};
			const response = await request(server)
				.post('/student')
				.send(student);

			expect(response.status).toBe(400);
		});
	});

	describe('DELETE /students/:id', () => {
		it('should delete student and respond with 200', async () => {
			const response = await request(server).delete(
				'/students/1'
			);
			expect(response.status).toBe(200);
		});

		it('should respond with 404 when student with the provided id does not exist', async () => {
			const response = await request(server).delete(
				'/students/2'
			);
			expect(response.status).toBe(404);
		});
	});
});
