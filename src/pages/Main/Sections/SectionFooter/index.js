import React from 'react';

import logo from '../../../../assets/LogoNameFraseBlue@0,5x.png';
import adress from '../../../../assets/adress.png';
import mail from '../../../../assets/mail.png';
import tel from '../../../../assets/tel.png';

import insta_icon from '../../../../assets/insta_icon.png';
import face_icon from '../../../../assets/face_icon.png';
import mail_icon from '../../../../assets/mail_icon.png';

import './styles.css';

const SectionFooter = () => {
    return (
        <>
            <div id="section-footer">
                <div className="footer-column">
                    <div className="footer-img">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="footer-column-dir">
                        <h1>Contato</h1>

                        <div className="footer-component">
                            <div className="footer-img-contact">
                                <img src={adress} alt="logo" />
                            </div>
                            <h2>Rua do Expedicionários, 568, Cornélio Procópio - PR</h2>
                        </div>

                        <div className="footer-component">
                            <div className="footer-img-contact">
                                <img src={tel} alt="logo" />
                            </div>
                            <h2>+55 (43) 99999-9999</h2>
                        </div>

                        <div className="footer-component">
                            <div className="footer-img-contact">
                                <img src={mail} alt="logo" />
                            </div>
                            <h2>contato@monitora.com</h2>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-img-bottom">
                        <img src={face_icon} alt="logo" />
                    </div>
                    <div className="footer-img-bottom">
                        <img src={mail_icon} alt="logo" />
                    </div>

                    <div className="footer-img-bottom">
                        <img src={insta_icon} alt="logo" />
                    </div>
                </div>

                <div className="footer-credit">
                    <h3>Copyright © Monitora - Soluções em gerenciamento de performance veicular.</h3>
                </div>
            </div>
        </>
    )
}

export default SectionFooter;