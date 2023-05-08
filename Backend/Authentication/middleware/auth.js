const jwt = require("jsonwebtoken")

function auth(req,res,next){
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        var decoded = jwt.verify(token, 'accesstoken');
        if(decoded){
            req.body.userID = decoded.userID
            next()
        }else{
            res.status(401).send({"msg":"Invalid User From Middleware auth "})
        }
    }else{
        res.status(401).send({"msg":"Please Login First "})

    }
}

module.exports = auth


// {
//     "name": "shaikh",
//     "email": "shaikh@gmail.com",
//     "gender": "Male",
//     "password": "shaikh",
//     "age": 23,
//     "city": "Mumbai",
//     "is_married": false
//   }