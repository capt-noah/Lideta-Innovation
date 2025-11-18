var nodemailer = require('nodemailer');
require('dotenv').config();

const user = process.env.USER_EMAIL;
const pass = process.env.PASS;
const appPass = process.env.APP_PASS;

console.log(user);
console.log(appPass);

var trasnporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: appPass
    }
});

var mailOptions = {
    from: user,
    to: 'noahte2019@gmail.com',
    subject: 'Complinat',
    text: 'Complinat about the organization'
}

trasnporter.sendMail(mailOptions, (error, info)=> {
    if(error)   console.log("Failed to Send The Email: " + error);
    else console.log("Email Was Sent Successfully: " + info.response);
})