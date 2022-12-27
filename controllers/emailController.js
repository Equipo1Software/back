const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendmail = (req, res) => {
    const {correos, asunto, texto} = req.body
    console.log(correos);
    const token = process.env.PW

    

    if (!token) {
        return res.status(400).send({ message: "No se ha entregado la contraseña de aplicación para el correo" })
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'njsilvapereira@gmail.com',
            pass: token
        }
    })
    let directory = [
        correos 
    ]
    const mailOptions = {
        from: `Administrador <No responder>`,
        to: directory,
        subject: asunto,
        text: texto
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).send({ message: 'Error al enviar el correo' })
        }
        return res.status(200).send({ message: 'Mensaje enviado' })
    })
    transporter.verify().then(() => {
        console.log('Servidor de correos habilitado')
    }).catch(err => {
        console.log('Error al utilizar servidor de correos')
    })
}

module.exports = {sendmail}