const db = require('../../data/dbConfig');

module.exports = {
	find,
	findById,
	findBy,
	add,
};

const find = () => {
	return db('users');
};

const findById = (id) => {
	return db('users').where({ id }).first();
};

const findBy = (key) => {
	return db('users').where({ username }).first();
};

const add = async (user) => {
	const [id] = await db('users').insert(user, 'id');
	return findById(user);
};
