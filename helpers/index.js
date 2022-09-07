exports.createPostValidator = (req, res, next) => {

    //title
    req.check('title', 'write a title').notEmpty()
    req.check('title', 'Title must be between 4 to 150 characters').isLength({
        min:4,
        max:150
    });

    //body
    req.check('body', 'write a body').notEmpty()
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min:4,
        max:2000
    });

    //check for Errors
    const errors = req.validationErrors()
};