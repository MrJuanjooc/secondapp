const jwt = require('jsonwebtoken');
const config = require ('../configs/config');


module.exports = (req, res, next) => {
    const token = req.headers ['authorization'];

    if (!token) {
        return res.status(401).send ({error: 'No se encontro el Token'})
    } else {
        
    }

    jwt.verify(token, config.SECRET, (err, decToken) => {
        if (err ) {
            return res.status(401).send({error: 'Token No valido'});
        }
        req.user = decToken.user;
        next();
    });
};