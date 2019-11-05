import React from 'react';
import styles from './styles.css';

export default class FormContact extends React.Component {

    render() {
        return (
            <>
                <form>
                    Nome
                    <input type="text" name="name" />
                    E-mail
                    <input type="text" name="name" />
                    Telefone
                    <input type="text" name="name" />
                    Assunto
                    <input type="text" name="name" />
                    Mensagem
                    <textarea id="msg" name="msg"
                        rows="5" cols="33">
                        Mensagem...
                    </textarea>
                </form>
            </>
        );
    }
}