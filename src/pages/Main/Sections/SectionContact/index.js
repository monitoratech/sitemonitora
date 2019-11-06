import React from 'react';
import FormContact from '../../../../components/FormContact';
import logoMonitora from '../../../../assets/LogoNameFraseBlack.png';


import './styles.css';


const SectionContact = () => {
    return (
        <>
            <div id="contact-body">

                <div className="img-contact">
                    <img src={logoMonitora} alt="logo" />
                </div>

                <div className="contact-column">
                    <div className="contact-column-content dir">
                        <h2 className="text-body one">
                            Economia, segurança, transparência dos dados e
                            controle do seu veículo na palma de
                            suas mãos!
                        </h2>

                        <h2 className="text-body two">
                            Conte conosco para o próximo nível
                            da sua forma de dirigir.
                         </h2>

                        <ul className="text-body tree">
                            <li>(99) 99999-9999</li>
                            <li>(99) 99999-9999</li>
                            <li>contato@monitora.com.br</li>
                        </ul>
                    </div>
                    <div className="contact-column-content esq">
                        <FormContact />
                    </div>

                </div>
            </div>
        </>
    )
}

export default SectionContact;