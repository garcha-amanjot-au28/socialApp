const Post = require('../models/post');


exports.getPosts = (req,res) => {
    res.json({
        posts:[
            {title:'First Post'},
            {title:'Second Post'}
        ]
    })
};

exports.createPosts = (req,res) => {
    console.log("Inside create Post Route")
    const post = new Post(req.body)
    // console.log("Creating Post: ",req.body,post)
    post.save((err, result) => {
        if (err){
            return res.status(400).json({
                error:err
            })
        }
        res.status(200).json({
            post: result
        })
    })
    
}
