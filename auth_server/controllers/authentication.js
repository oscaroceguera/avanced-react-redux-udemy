const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user){
	const timestamp = new Date().getTime()
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
	// user has already their email and password auth
	// we just need to give them a token
	res.send({ token: tokenForUser(req.user)})
}

exports.signup = function(req, res , next){
	const email = req.body.email;
	const password = req.body.password;

	if (!email && !password) {
		return res.status(422).send({ error: 'You must provide email and password'})
	}

	// see if a user with the guven email exists
	User.findOne({ email: email }, function(err, existinUser){
		if(err){ return next(err) }

		// if a user with email does exist, return an eror
		if(existinUser) {
			return res.status(422).send( {error: 'Email is in use'})
		}

		// if a user with email does NOT exist, create and save user record
		const user = new User({
			email : email,
			password : password
		});

		user.save(function(err){
			if(err){ return next(err);}
		});

		// Repond to request indicationg the user was created
		res.json({ token : tokenForUser(user) })
	})



}
