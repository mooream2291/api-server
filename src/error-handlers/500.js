'use strict';

function serverError(req, res, next){
    res.status(500).send('internal server error', err)
}

module.exports = serverError;