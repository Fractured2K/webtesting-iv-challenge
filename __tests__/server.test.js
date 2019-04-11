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
});
