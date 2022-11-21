module.exports = {
    ensureAuth: function (req, res,next) {
        if (req.isAuthenticated()){
            return next()
        }
        else {
           //todo
        }
    },
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()){
            //todo
        }
        else {
            return next()
        }
    },
}
