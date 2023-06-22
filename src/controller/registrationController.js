const registerUser = require("../model/RegistrationModel")


const signIN = async (req, res) => {
    try {
        const { Fullname, Email, Password } = req.body
        console.log(req.body)

        if (!Fullname) {
            return res.status(400).send({ status: false, data: "fullname is require" })
        }
        if (!Email) {
            return res.status(400).send({ status: false, data: "Email is require" })
        } if (!Password) {
            return res.status(400).send({ status: false, data: "Password is require" })
        }

        const data = await registerUser.create(req.body)
        return res.status(201).send({ status: true, data: data })


    } catch (err) {
        return res.status(500).send({ status: false, data: err.message })

    }
}


const logIN = async (req, res) => {

    try {
        const { Email, Password } = req.body
        if (!Email) {
            return res.status(400).send({ status: false, data: "Email is require" })
        }
        if (!Password) {
            return res.status(400).send({ status: false, data: "Password is require" })
        }

        const check = await registerUser.findOne(req.body)

        if (!check) {
            return res.status(400).send({ status: false, data: "user Not Found" })
        }

        return res.status(200).send({ status: true, data: "login successfully" })

    } catch (err) {
        return res.status(500).send({ status: false, data: err.message })

    }

}



module.exports = { signIN, logIN }