const jwt = require('jsonwebtoken');
const config = require ('../configs/config');
const authException = require ('../exceptions/notAuthException')


module.exports = (req, res, next) => {
    const token = req.headers ['authorization'];

    if (!token) {
        throw new authException();
    }

    jwt.verify(token, config.SECRET, (err, decToken) => {
        if (err ) {
            throw new authException();
        }
        req.user = decToken.user;
        next();
    });
};