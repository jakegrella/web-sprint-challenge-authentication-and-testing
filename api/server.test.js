const request = require('supertest');
const server = require('./server');

test('sanity', () => {
	expect(false).toBe(false);
});

describe('server.js', () => {
	describe('get request for jokes', () => {
		it('returns 401 when not logged in', async () => {
			const res = await request(server).get('/api/jokes');
			expect(res.status).toBe(401);
		});
	});
});
