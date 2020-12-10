function logger(req,res,next) {
    console.log(`__REQUEST__ ${req.method} ${req.path}`);
    //console.log(req.body);
    next();
}

module.exports = logger;