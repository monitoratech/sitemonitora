import React from 'react';
import $ from 'jquery';

import FormContact from '../../../../components/FormContact';
import logoMonitora from '../../../../assets/LogoNameFraseBlack.png';


import './styles.css';


export default class SectionContact extends React.Component {

    state = {
        classNameDir: "",
        classNameEsq: "",
        classNameTop: ""
    }

    componentDidMount() {
        this.handleScrooll();
        window.onscroll = () => this.handleScrooll();
    }

    handleScrooll() {
        if (document.documentElement.scrollTop > ($('.img-contact').offset().top - window.innerHeight * 0.5))  {
            this.setState({
                classNameDir: "animationDir",
                classNameEsq: "animationEsq",
                classNameTop: "animationTop"
            });
        }
        else {
            this.setState({
                classNameDir: "",
                classNameEsq: "",
                classNameTop: ""
            });
        }
    }

    render() {
        return (
            <>
                <div id="contact-body">

                    <div className={"img-contact top " + this.state.classNameTop}>
                        <img src={logoMonitora} alt="logo" />
                    </div>

                    <div className="contact-column">
                        <div className={"contact-column-content dir " + this.state.classNameDir}>
                            <h2 className="text-body one">
                                Economia, segurança, transparência de dados e
                                controle do seu veículo na palma de
                                suas mãos!
                        </h2>

                            <h2 className="text-body two">
                                Conte conosco para o próximo nível
                                da sua forma de dirigir.
                         </h2>

                            <ul className="text-body tree">
                                <li>(43) 99910-4977</li>
                                <li>(43) 99662-5152</li>
                                <li>contato@omonitora.com.br</li>
                            </ul>
                        </div>
                        <div className={"contact-column-content esq " + this.state.classNameEsq}>
                            <FormContact />
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

