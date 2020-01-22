import axios from 'axios';

export default async function sendMail(name, email, tel, theme, msg) {

    await axios.post("https://monitora-app.herokuapp.com/api/mailto",{
        name: name,
        email: email,
        tel: tel,
        theme: theme,
        msg: msg
    });
}