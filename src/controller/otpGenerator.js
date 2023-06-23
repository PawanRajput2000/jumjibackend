const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const user = require("../model/RegistrationModel");
let baseURL = process.env.BaseURL



const jwtKey = "jwtkey";
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pawanrajput852710@gmail.com',
        pass: 'mxdhlkeuukecdlxd',
    },
});

const forgetPassword = async (req, res) => {
    try {
        const { Email } = req.body;
        console.log(Email)
        const existingUser = await user.findOne({ Email });

        if (existingUser) {
            const resetToken = jwt.sign({ Email }, jwtKey, { expiresIn: '1h' });

            const resetLink = `https://jumji.netlify.app/reset-password/${resetToken}`;
            sendEmail(Email, 'Password Reset', `Click the following link to reset your password: ${resetLink}`);

            res.json({ message: 'Password reset link sent to your email.' });
        } else {
            res.status(404).json({ error: 'User not found.' });
        }
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ error: 'Internal server error.' });
    }
};

const resetPassword = async (req, res) => {
    try {
        
        const { token } = req.params;
        const { Password } = req.body;
        console.log(token)
        
        if(Password === undefined || Password.length === 0){
            return  res.status(400).json({ message: "password is required" });
        }

         
        const decoded = jwt.verify(token, jwtKey);
        console.log(decoded)
        const Email = decoded.Email;
       

        await user.findOneAndUpdate({ Email :Email}, {$set:{ Password: Password }},{returnOriginal: false});

       return  res.status(200).json({ message: 'Password reset successful.' });
    } catch (err) {
        console.log(err.message)
       return res.status(500).json({ error: 'Invalid or expired reset token.' });
    }
};

function sendEmail(Email, subject, message) {
    const mailOptions = {
        from: 'pawanrajput852710@gmail.com',
        to: Email,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {forgetPassword,resetPassword}
