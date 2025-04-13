const LogErrors = (err, req, res, next) =>{
    console.error(err);
    next(err)
}

const ErrorHandler = (err, req, res, next) =>{
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

const BoomErrorHandler = (err, req, res, next) =>{
    if (err.isBoom) {
        const {output} = err
        res.status(output.statusCode).json(output.payload)
    } else {
        next(err)
    }

}


module.exports = { LogErrors, ErrorHandler, BoomErrorHandler }
