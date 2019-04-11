const request = require('supertest');
const server = require('./server');

describe('Server.js tests', () => {
	describe('GET /', () => {
		it('should respond with 200OK', () => {
			return request(server)
				.get('/')
				.expect(200);
		});
	});

	describe('POST /students', () => {
		it('should respond create student and respond with 201', async () => {
			const student = { name: 'John Smith' };

			const response = await request(server)
				.post('/student')
				.send(student);

			expect(response.status).toBe(201);
		});

		it('should respond with 400 when missing body data', async () => {
			const student = {};

			const response = await request(server)
				.post('/student')
				.send(student);

			expect(response.status).toBe(400);
		});
	});
});
