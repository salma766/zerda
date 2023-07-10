import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateAccessToken, securedWithAdminToken } from "../middlewares/jwt.js";
import express from "express";
import nodemailer from 'nodemailer';

const router = express.Router();


export const Role = {
    admin: 'admin',
    etudiant: 'etudiant',
    formateur: 'formateur',
    employe: 'employe',
};

const index = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.json({ message: "error" })
    }
}

const login = (req, res, next) => {
    const { email, password } = req.body;
    // const email = req.body.email;
    // const password = req.body.password;




    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({ status: "error", message: err })
                    }
                    if (result) {
                        const hash = {
                            id: user._id,
                            role: user.role
                        }
                        const accessToken = generateAccessToken(hash)

                        res.status(200).send(JSON.stringify({ //200 OK
                            status: 'success',
                            message: "logged in successfully",
                            user: {
                                _id: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                username: user.username,
                                gender: user.gender,
                                email: user.email,
                                password: user.password,
                                phone: user.phone,
                                role: user.role,
                                token: accessToken,
                            },
                        }))

                    } else {
                        res.status(200).send(JSON.stringify({ //201 password
                            status: 'error',
                            message: "incorrect password"
                        }))


                    }
                })
            } else {
                res.status(200).send(JSON.stringify({ //200 OK
                    status: 'error',
                    message: "user not found"
                }))
            }
        })
}

const register = (req, res, next) => {

    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: "nour.benabderrahmen@esprit-tn.com",
            pass: "Vienna2018",
        },
    });

    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {

        if (err) {
            console.log('erreur password hash');
            res.status(201).send(JSON.stringify({
                status: "error",
                message: err
            }))
        }

        User.findOne({ $or: [{ email: req.body.email }] })
            .then(user => {
                if (user) {//user found
                    res.status(201).send(JSON.stringify({
                        status: "error",
                        message: 'User exist'
                    }))
                } else {//no user found
                    let user = new User({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        username: req.body.username,
                        gender: req.body.gender,
                        email: req.body.email,
                        password: hashedPass,
                        phone: req.body.phone,
                        role: req.body.role,
                        avatar: "",
                        verified: 0
                    })
                    user.save().then(async user => {

                        transporter.sendMail({
                            from: 'nour.benabderrahmen@esprit-tn.com', // sender address
                            to: req.body.email, // list of receiver
                            subject: "Hello ✔", // Subject line
                            text: `you've been added successfully to our e-learning platform. here is your password : ${req.body.password}`, // plain text body
                        })
                            .then((value) => {
                                console.log("mail sent ")
                                res.status(200).send(JSON.stringify(user))
                            })
                            .catch((reason) => {
                                console.log("an error occured in sending mail", reason)
                                res.status(201).send(JSON.stringify({
                                    status: "error",
                                    message: "an error occured in sending mail"
                                }))
                            })
                    })
                        .catch(error => {
                            res.status(201).send(JSON.stringify({
                                status: "error",
                                message: "An error occured when adding user!"
                            }))
                        })
                }//end else
            })//end then 
    })//end hash
}

const sendVerificationCode = (req, res, next) => {
    res.json({ status: 200, message: 'sent' })
    // var phone = req.body.phone
    // var code = req.body.verificationCode
    // var mailContent = `Almost done, To complete your Edumax sign up, we just need to verify your account: Please copy the code below to verify your account:` + code

    // const accountSid = process.env.TWILIO_ACCOUNT_SID;
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    // const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

    // const client = require('twilio') (accountSid, authToken);

    // client.messages
    //     .create({ body: mailContent, from: phoneNumber, to: '+216' + phone })
    //     .then(message => res.json({ status: 200, message: 'sent' }))
    //     .catch(error => res.json({ status: 200, message: 'error sending' }));

}

const verifyAccount = (req, res, next) => {

    let updatedUser = {
        verified: 1
    }

    User.findOneAndUpdate({ email: req.body.email }, { $set: updatedUser })
        .then((user) => {
            const hash = { id: user._id }
            const token = generateAccessToken(hash)
            res.json({
                _id: user._id,
                email: user.email,
                password: user.password,
                phone: user.phone,
                avatar: user.avatar,
                verified: user.verified,
                token: token,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            })
        })
        .catch(error => {
            res.json({
                _id: "",
                email: "",
                password: "",
                phone: "",
                avatar: "",
                verified: 0,
                token: ""
            })
        })
}





router.get('/', index) //add security middleware

//authentification
router.post('/login', login) //email,password
router.post('/register', register)

router.post('/sendVerificationCode', sendVerificationCode)
router.post('/verifyAccount', verifyAccount)



export default router;