const router = require('express').Router();

const User = require('./users-model');

// ❓ restricted middleware

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(200).json(users);
	} catch (err) {
		console.log(err.message);
		res.status(500).json('500 error');
	}
});
