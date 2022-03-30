const jwt = require('jsonwebtoken');

class Auth {

    static validate(req, res, next) {

        console.log(req.headers)

        const validate = jwt.verify(req.headers.token, 'jkbjscco3432f') // authorization bisa di ganti bebas, nanti di sesuaikan key di postman

        if (validate) {
            next()
        } else {
            res.status(401)
        }

        // res.status(401).json({ message: 'unauthorized' })
    }
}

module.exports = Auth;