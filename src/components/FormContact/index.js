import React from 'react';
import Button from '../Button';
import MaskedInput from 'react-text-mask';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { findDOMNode } from 'react-dom';

import { validateEmail, validateName } from '../../utils/funcsValidations';
import './styles.css';


export default class FormContact extends React.Component {

    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputTel = React.createRef();
        this.inputAssunto = React.createRef();
        this.inputMsg = React.createRef();


        this.focusInputName = this.focusInputName.bind(this);
        this.focusInputEmail = this.focusInputEmail.bind(this);
        this.focusInputTel = this.focusInputTel.bind(this);
        this.focusInputAssunto = this.focusInputAssunto.bind(this);
        this.focusInputMsg = this.focusInputMsg.bind(this);
    }

    focusInputName() {
        this.inputName.current.focus();
    }
    focusInputEmail() {
        this.inputEmail.current.focus();
    }
    focusInputTel() {
        this.inputTel.focus();
    }
    focusInputAssunto() {
        this.inputAssunto.current.focus();
    }
    focusInputMsg() {
        this.inputMsg.current.focus();
    }

    state = {
        name: "",
        email: "",
        tel: "",
        assunto: "",
        msg: "",
        msgAlert: "",
        visibleAlert: false,
        target: null,
    };

    handleTxt = async (event) => {
        await this.setState({
            [event.target.name]: event.target.value
        })
    };

    clickButton = async () => {
        var msg = "";
        var visible = false;
        var tar = null;

        if (validateName(this.state.name)) {
            if (validateEmail(this.state.email)) {
                if (this.state.tel.length >= 14) {
                    if (this.state.assunto.length > 0) {
                        if (this.state.msg.length > 1) {
                            console.log("Mensagem enviada");
                            this.clearAll();
                        } else {
                            tar = this.inputMsg.current;
                            this.focusInputMsg();
                            msg = "Insira uma mensagem";
                            visible = true;
                        }
                    } else {
                        tar = this.inputAssunto.current;
                        this.focusInputAssunto();
                        msg = "Informe o assunto da mensagem";
                        visible = true;
                    }
                } else {
                    tar = this.inputTel;
                    this.focusInputTel();
                    msg = "Informe um número de telefone válido";
                    visible = true;
                }
            } else {
                tar = this.inputEmail.current;
                this.focusInputEmail();
                msg = "Informe um email válido";
                visible = true;
            }
        } else {
            tar = this.inputName.current;
            this.focusInputName();
            msg = "Informe um nome válido";
            visible = true;
        }

        await this.setState({
            msgAlert: msg,
            visibleAlert: visible,
            target: tar
        });
    }

    clearAll = () => {
        this.setState({
            name: "",
            email: "",
            tel: "",
            assunto: "",
            msg: ""
        });
    }

    render() {
        return (
            <>
                <div id="form-contact">
                    <form>
                        <h1>Nome</h1>
                        <input ref={this.inputName} type="text" name="name" onChange={this.handleTxt} maxLength="50" value={this.state.name} />

                        <h1>E-mail</h1>

                        <input
                            ref={this.inputEmail}
                            type="text"
                            name="email"
                            onChange={this.handleTxt}
                            maxLength="50"
                            value={this.state.email}
                        />

                        <h1> Telefone</h1>

                        <MaskedInput
                            ref={ref => this.inputTel = findDOMNode(ref)}
                            name="tel"
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            guide
                            onChange={this.handleTxt}
                            value={this.state.tel}
                        />

                        <h1>Assunto</h1>
                        <input
                            ref={this.inputAssunto}
                            type="text" name="assunto"
                            onChange={this.handleTxt}
                            maxLength="50"
                            value={this.state.assunto}
                        />

                        <h1>Mensagem</h1>
                        <textarea ref={this.inputMsg} id="msg" name="msg"
                            rows="5" cols="33" onChange={this.handleTxt} maxLength="500" value={this.state.msg}/>
                    </form>

                    <Button onClick={this.clickButton}>Enviar</Button>

                    <Overlay target={this.state.target} show={this.state.visibleAlert} placement="top">
                        {props => (
                            <Tooltip id="overlay-example" {...props}>
                                {this.state.msgAlert}
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
            </>
        );
    }
}