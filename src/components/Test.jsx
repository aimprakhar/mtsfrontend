// import React from 'react'
// import dotenv from 'dotenv';
//   dotenv.config();
//   import nodemailer from "nodemailer"
// const Test = () => {


// // const nodemailer = require('nodemailer');
// // const log = console.log;

// // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
//         pass: process.env.PASSWORD || '1234' // TODO: your gmail password
//     }
// });

// // Step 2
// let mailOptions = {
//     from: 'abc@gmail.com', // TODO: email sender
//     to: 'cba@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer - Test',
//     text: 'Wooohooo it works!!'
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });

//   return (
//     <div>test</div>
//   )
// }

// export default Test