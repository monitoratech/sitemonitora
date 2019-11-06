import React from 'react';
import Button from '../Button';

import './styles.css';

export default class FormContact extends React.Component {

    render() {
        return (
            <>
                <div id="form-contact">
                    <form>
                     <h1>Nome</h1>
                    <input type="text" name="name" />
                    <h1>E-mail</h1>
                    <input type="text" name="name" />
                    <h1> Telefone</h1>
                    <input type="text" name="name" />
                    <h1>Assunto</h1>
                    <input type="text" name="name" />
                    <h1>Mensagem</h1>
                    <textarea id="msg" name="msg"
                            rows="5" cols="33" />
                    </form>

                    <Button>Enviar</Button>
                </div>
            </>
        );
    }
}