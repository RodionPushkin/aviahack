const db = require("./database");

class lib {
    AuthGuard(req, res, callback) {
        if (req.cookies?.token) {
            if (!req.cookies.token) {
                callback()
            } else {
                res.status(401).send('not authorized')
            }
        } else if (req.query?.token) {
            if (req.query.token != null) {
                callback()
            } else {
                console.log(1)
                res.status(401).send('not authorized')
            }
        } else {
            res.status(401).send('not authorized')
        }
    }
}

module.exports = new lib()
