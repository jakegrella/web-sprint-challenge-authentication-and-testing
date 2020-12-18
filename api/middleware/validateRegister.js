const User = require('../users/users-model');

const validateRegister = async (req, res, next) => {
	const { username, password } = req.body;
	const taken = await User.findBy(username);
	if (!taken) {
		if (!username || !password) {
			res.status(400).json('username and password required');
		} else if (typeof username !== 'string' || typeof password !== 'string') {
			res.status(400).json('fields must be strings');
		} else {
			req.user = req.body;
			next();
		}
	} else res.status(400).json('username taken');
};

module.exports = validateRegister;
