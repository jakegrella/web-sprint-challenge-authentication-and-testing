const User = require('../users/users-model');
// fix this file
const validateLogin = async (req, res, next) => {
	const { username, password } = req.body;
	const existingUser = await User.findBy(username);
	if (existingUser) {
		if (!username || !password) {
			res.status(400).json('username and password required');
		} else if (typeof username !== 'string' || typeof password !== 'string') {
			res.status(400).json('fields must be strings');
		} else {
			req.user = req.body;
			next();
		}
	} else res.status(400).json('invalid credentials');
};

module.exports = validateLogin;
