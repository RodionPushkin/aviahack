const {AuthGuard} = require('./lib')
module.exports = router => {
    router.get(`/api/`, (req, res) => AuthGuard(req, res, () => {
        res.json({data: 'info'})
    }))
    router.get(`/api/user`, (req, res) => AuthGuard(req, res, () => {
        res.status(200).json(['ok'])
    }))
    router.put(`/api/user/auth`, (req, res) => {
        res.status(200).cookie('token', 'ok', {expires: new Date(Date.now() + 900000), httpOnly: true}).json(['ok'])
    })
}
