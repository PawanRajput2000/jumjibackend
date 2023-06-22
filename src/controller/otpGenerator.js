const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const user = require("../model/RegistrationModel");

const jwtKey = "your_jwt_secret_key";

// Gmail API credentials
const CLIENT_ID = '484840864874-5oq8b050bh2q33qf04tc3435godt249m.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
//const REDIRECT_URI = 'https://accounts.google.com/o/oauth2/auth';
const REFRESH_TOKEN = 'https://oauth2.googleapis.com/token';

const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'rajputpawan824@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN
    }
});

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            const resetToken = jwt.sign({ email }, jwtKey, { expiresIn: '1h' });

            const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
            sendEmail(email, 'Password Reset', `Click the following link to reset your password: ${resetLink}`);

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
        const { newPassword } = req.body;


        const decoded = jwt.verify(token, jwtKey);
        const email = decoded.email;
        // Update the user's password in the database or your preferred storage mechanism
        // Example: user.updateOne({ email }, { password: newPassword });

        await user.updateOne({ email }, { password: newPassword });

        return res.status(200).json({ message: 'Password reset successful.' });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ error: 'Invalid or expired reset token.' });
    }
};

function sendEmail(email, subject, message) {
    const mailOptions = {
        from: 'pawanrajput852710@gmail.com',
        to: email,
        subject: subject,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { forgetPassword, resetPassword }
