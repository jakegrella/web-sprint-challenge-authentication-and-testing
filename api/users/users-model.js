const db = require('../../data/dbConfig');

const find = () => {
	return db('users');
};

const findById = (id) => {
	return db('users').where({ id });
};

const findBy = (key) => {
	return db('users').where({ key }).first();
};

const add = async (user) => {
	const [id] = await db('users').insert(user, 'id');
	return findById(id);
};

module.exports = {
	find,
	findById,
	findBy,
	add,
};
