function validator (req,res,next) {

    if (req.method === "PUT" || req.method === "DELETE") {
        //make sure an id is provided
        if (req.params.id) next();
        else next('No ID provided');
    }
    else {
        next();
    }
}

module.exports = validator;