module.exports = {
    isLoggedIn1 (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/cliente_signin');
    },

    isNotLoggedIn1(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/administrador');
    }
};