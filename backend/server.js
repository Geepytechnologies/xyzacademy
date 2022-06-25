const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const SMTPConnection = require('nodemailer/lib/smtp-connection');


async function main(){
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
       /*  host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        },
        tls:{
            rejectUnauthorized:false
        } */
        service: 'gmail',
        auth: {
            user: "geepytechnologies@gmail.com",
            // pass: "RICHGIFT196897"
            pass: "lmjohzpsrgtppuft"
        }
    });
    
    transporter.verify(function(error,success){
        if(error){
            console.log(error);
        }else{
            console.log("server is ready for messages");
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Geepy" <geepytechnologies@gmail.com>',
        to: "bstringz6@gmail.com",
        subject: 'hello',
        text: "I really wanna thank you for everything"
    });

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});