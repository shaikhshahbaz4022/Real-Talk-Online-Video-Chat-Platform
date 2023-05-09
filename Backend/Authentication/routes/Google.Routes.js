
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config()
const passport = require('passport');
const PostModel = require('../model/postModel');
const google_client_id = process.env.google_client_id;
const google_client_secret = process.env.google_client_secret;

passport.use(new GoogleStrategy({
    clientID: google_client_id,
    clientSecret: google_client_secret,
    callbackURL: "http://localhost:6500/auth/google/callback",

},
    async function (accessToken, refreshToken, profile, cb) {
   

        let email = profile._json.email;
        let name = profile._json.name;
        const user = new PostModel({ name, email })
        await user.save()
        cb(null, user)

    }
));
module.exports = passport

