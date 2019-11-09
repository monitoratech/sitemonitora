const mongoose = require("mongoose");
var nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "monitoradatabase@gmail.com",
        pass: "monitoratech159800"
    },
});

const mailOptions = {
    from: 'monitoradatabase@gmail.com',
    to: "",
    subject: 'Mensagem recebida no WebSite Monitora',
    text: ""
};

const emails = ["antonioduarte@alunos.utfpr.edu.br", "jiovane_alexsander@hotmail.com", "jorgefelipecunha@gmail.com",
"williancruz@alunos.utfpr.edu.br", "ajesus@alunos.utfpr.edu.br"];

export default function sendMail(name, email, tel, theme, msg) {
    var text = 'Mensagem recebida no web site do monitora\n\n'+
    'De: '+name+'\n'+
    'Telefone: '+tel+'\n'+
    'E-mail: '+email+'\n'+
    'Assunto: '+theme+'\n\n'+
    'Mensagem: '+msg;

    mailOptions.text = text;
    
    emails.map(mail => {
        mailOptions.to = mail;
        transporter.sendMail(mailOptions, function (error, info) { });

        return 0;
    })

}