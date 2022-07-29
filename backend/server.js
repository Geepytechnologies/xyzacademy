const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')
const congressRoute = require('./routes/registercongress')
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connection successful")).catch((err)=>{
    console.log(err)
});

app.use(cors({ origin : [ "http://localhost:5000"]}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/auth', authRoute)
app.use('/api/registercongress', congressRoute)

app.post('/send', async (req,res)=>{
    const {name,email} = req.body;
    res.json({name,email});
})

// async function main(){
    // let testAccount = await nodemailer.createTestAccount();
   /*  let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "geepytechnologies@gmail.com",
            // pass: "RICHGIFT196897"
            pass: "lmjohzpsrgtppuft"
        }
    }); */
    
    /* transporter.verify(function(error,success){
        if(error){
            console.log(error);
        }else{
            console.log("server is ready for messages");
        }
    }); */

    // send mail with defined transport object
   /*  let info = await transporter.sendMail({
        from: '"Geepy" <geepytechnologies@gmail.com>',
        to: "bstringz6@gmail.com",
        subject: 'hello',
        text: "I really wanna thank you for everything"
    });
 */
    // console.log("Message sent: %s", info.messageId);
// }

// main().catch(console.error);

app.listen(process.env.PORT || 5000,()=>{
    console.log('Server is running on port 5000');
});