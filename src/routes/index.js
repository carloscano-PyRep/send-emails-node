const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer');
router.post('/send-email',async (req,res)=>{
    const {name,email,phone,message} = req.body;
    contentHTML = `
    <h1>User information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User mail: ${email}</li>
        <li>User phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `;
    const transporter = nodemailer.createTransport({
        host:'mail.gamestrikestore.com',
        port:587,
        secure:false,
        auth:{
            user:'contact@gamestrikestore.com',
            pass:'Erick@96'
        },
        tls:{
            rejectUnauthorized:false
        }

    });

    const info = await transporter.sendMail({
        from:"contact@gamestrikestore.com",
        to:'dedpol.cano@gmail.com',
        subject:'Pruebas',
        html: contentHTML
    });
    console.log("Message sent", info.messageId);
    res.redirect('/sucess.html');
})

module.exports = router;

