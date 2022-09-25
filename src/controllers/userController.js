const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === "object" && Object.keys(value).length === 0) return false;
    return true;
};

const createuser = async function (req, res) {
    try {
        let data = req.body
        const { title, name, phone, email, password, address } = data
        let alphabets = /^[A-Z][A-Z a-z]{3,20}$/
        let passValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/
        let emailValid = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        let mobileValid = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
        if (!isValid(data)) {
            return res.status(400).send({ status: false, msg: "You have not provided any data" })
        }
        if (!isValid(title)) {
            return res.status(400).send({ status: false, msg: "Please provide title. it's mandatory" })
        }
        if (!title.match(/Mr|Miss|Mrs/)) {
            return res.status(400).send({ status: false, msg: "Title can have only Mr or Miss or Mrs" })
        }
        if (!isValid(name)) {
            return res.status(400).send({ status: false, msg: "Please provide name. it's mandatory" })
        } else {
            data.name = data.name.trim().split(" ").filter(word => word).join(" ")
        }
        if (!alphabets.test(name)) {
            return res.status(400).send({ status: false, msg: "name must contain only letters and first letter is capital" })
        }
        if (!isValid(email)) {
            return res.status(400).send({ status: false, msg: "Please provide email" })
        }
        if (!emailValid.test(email)) {
            return res.status(400).send({ status: false, msg: "Enter valid email" })
        }
        let usersemail = await userModel.findOne({ email: email })
        if (usersemail) {
            return res.status(400).send({ status: false, msg: "this email is already exist" })
        }
        if (!isValid(phone)) {
            return res.status(400).send({ status: false, msg: "Please provide Mobile Number. it's mandatory" })
        }
        if (!mobileValid.test(phone)) {
            return res.status(400).send({ status: false, msg: "please provide valid mobile Number 10-digit" })
        }
        let usersphone = await userModel.findOne({ phone: phone })
        if (usersphone) {
            return res.status(400).send({ status: false, msg: "this mobile Number is already exist" })
        }
        if (!password) {
            return res.status(400).send({ status: false, msg: "Please provide password" })
        }
        if (!passValid.test(password)) {
            return res.send({ status: false, msg: "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number" })
        }
        if (address.street) {
            address.street = address.street.trim().split(" ").filter(word => word).join(" ")
        }

        let savedata = await userModel.create(data)
        return res.status(201).send({ status: true, data: savedata })
    } catch (err) {
       return res.status(500).send({ status: false, err: err.message })
    }
}


const userlogin = async function (req, res) {
    try {
        let useremail = req.body.email
        let password = req.body.password
        let emailValid = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
        if (!isValid(useremail)) {
            return res.status(400).send({ status: false, msg: "Please provide email" })
        }
        if (!isValid(password)) {
            return res.status(400).send({ status: false, msg: "Please provide password" })
        }
        if (!emailValid.test(useremail)) {
            return res.status(400).send({ status: false, msg: "Enter valid email" })
        }
        let userdetails = await userModel.findOne({ email: useremail.trim(), password: password.trim() })
        if (!userdetails) {
            return res.status(401).send({ status: false, error: "Emaild or the password is not correct" })
        }
        let token = jwt.sign(
            {
                userId: userdetails._id.toString(),
                firstbook: "the moutain",
                iat: Math.floor(Date.now() / 1000),
                exp: Math.floor(Date.now() / 1000) + 50*60*60
            },
            "this is very very secret key"
        )
        res.setHeader('x-auth-key', token)
        res.status(200).send({ status: true, token: token });
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

module.exports.createuser = createuser
module.exports.userlogin = userlogin


 // const { title, name, phone, email, password, address } = data
        // let requiredkeys = [title, name, phone, email, password, address]
        // let keysarr = Object.keys(data)
        // for (let i = 0; i < keysarr.length; i++) {
        //     if(!keysarr[i]){
        //         res.status(400).send({ status: false, msg: `Please provide ${keysarr[i]}. it's mandatory` })
        //     }
        //     if (!isValid(requiredkeys[i])) {
        //         for (let j = 0; j < keysarr.length; j++) {
        //             if (keysarr.indexOf(keysarr[j]) === requiredkeys.indexOf(requiredkeys[i])) {
        //                 res.status(400).send({ status: false, msg: `Please fill ${keysarr[j]}. it's mandatory` })
        //             }
        //         }

        //     }
        // }