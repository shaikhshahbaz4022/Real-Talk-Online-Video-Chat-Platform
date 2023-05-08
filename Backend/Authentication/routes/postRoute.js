const express = require('express');
const path = require('path');


const passport = require("./Google.Routes")

require("dotenv").config()

const postRouter = express.Router()

postRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', "email"] }));

postRouter.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: `/auth/google/success`,
    failureRedirect: '/google/failure',
    session: false
  })
);

// postRouter.get("/auth/google/success", (req, res) => {
//     res.sendFile(__dirname, "/..frontend/index.html")
// })

postRouter.get('/auth/google/success', (req, res) => {
  const filePath = path.join(__dirname, '../Frontend/dashboard.html');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('File sent successfully');
    }
  });
});



module.exports = postRouter