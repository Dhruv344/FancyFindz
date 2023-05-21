const User = require('../models/user.model');

function getSignup(req, res)
{
    res.render('customer/auth/signup');
}

 function signup(req, res) {
    console.log(req.body);
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.fullName,
        req.body.street,
        req.body.postalCode,
        req.body.city
    );

     user.signup();

    res.redirect('/login');
}

function getLogin(req, res)
{
    res.render('customer/auth/login');
}

module.exports = {
    getLogin: getLogin,
    getSignup: getSignup,
    signup: signup
}