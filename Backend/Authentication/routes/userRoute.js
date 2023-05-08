const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const UserModel = require('../model/userModel');
const BlackModel = require('../model/blacklist');
const PostModel = require('../model/postModel');

const userRouter = express.Router()

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    try {
        isUserPresent = await UserModel.findOne({ email })
        if (isUserPresent) {
            return res.send({ "msg": "Login Directly" })
        }

        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new UserModel({ name, email, password: hash })
            await user.save()
            res.status(201).send({ "msg": "Registration Succesfull" })
        });
    } catch (error) {
        res.status(401).send({ "msg": "Some error occourd while  Registration" })

    }

})


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    let accesstoken = jwt.sign({ "userID": user._id }, 'accesstoken', { expiresIn: "7d" });


                    res.status(201).send({ "msg": "login success", "token": accesstoken, "user":user })

                } else {
                    res.status(401).send({ "msg": "wrong input,login failed ,User already exist, please login" })
                }
            });
        } else {
            res.status(401).send({ "msg": "login failed,user is not present" })

        }
    } catch (error) {
        res.status(401).send({ "msg": "error occourd while login " })

    }
})

userRouter.post("/logout", async (req, res) => {
    try {
        const foundToken = req.headers?.authorization
        const newBlackList = new BlackModel({ token: foundToken })
        await newBlackList.save()
        res.status(201).send({ "msg": "Logout SuccesFully" })
    } catch (error) {
        res.status(401).send({ "msg": error.message })
    }
})
userRouter.get("/blacklist", async (req, res) => {
    try {
        const token = req.headers?.authorization
        const black = await BlackModel.findOne({ token })
        if (black) {
            res.send(black)
        } else {
            res.send({ "msg": "Login Again !!You Are New User" })
        }
    } catch (error) {
        res.status(401).send({ "msg": error.message })

    }
})
userRouter.get("/findgoogle", async (req, res) => {
    const email = req.body.email
    try {
        const user = await PostModel.findOne({ email })
        
        res.send(user)
    } catch (error) {
        res.status(401).send({ "msg": error.message })

    }
})

module.exports = userRouter