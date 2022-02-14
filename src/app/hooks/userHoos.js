import bcrypt from 'bcrypt';
import senderMail from '../../emailSender'


module.exports = {
    sendEmailWelcom: async (user) => {
        await senderMail.sendMail({
             from: 'daniel@daniel.com',
             to: user.email, 
             subject: "Sua conta DevInHouse",
             text: "Sua conta criada",
             html: `<div>
                     <h1>DevInHouse</h1>
                     <p>Bem vindo ${user.name} sua conta foi criada</p>
                 </div>`,
         })
     },
     hashPassword: async (user) => {
        user.password_hash = await bcrypt.hash(user.password_hash, 8)
    }
}