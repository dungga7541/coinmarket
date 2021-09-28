import React, { Component } from 'react';
import "./csFooter.css";
import btn_ios from "./../images/btn-ios.png"

class Footer extends Component {
    render() {
        return (
            <div className="total-sticky-footer">
                <div className="total-footer-top">
                    <div className="total-footer-left">
                        <div className="footer-info-left">
                            <div className="logo-footer">
                                <img src="https://assets.website-files.com/5cbbb0da37d84e4838578f45/5cc08e530a5c750836baed0e_dark%20blue.svg" width="150px" height="70px" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="total-footer-right">
                        <div className="footer-info-right">
                            <div className="products-column ">
                                <h4>Products</h4>
                                <div className="products-values">
                                    <li>Blockchain Explorer</li>
                                    <li>Crypto API</li>
                                    <li>Crypto Indices</li>
                                    <li>Interest</li>
                                    <li>Jobs Board</li>
                                    <li>Sitemap</li>
                                </div>
                            </div>
                            <div className="products-column">
                                <h4>Company</h4>
                                <div className="products-values">
                                    <li>About us</li>
                                    <li>Terms of use</li>
                                    <li>Privacy Policy</li>
                                    <li>Disclaimer</li>
                                    <li>Methodology</li>
                                    <li>Careers<span className="products-values-hiring">We’re hiring!</span></li>
                                </div>
                            </div>
                            <div className="products-column">
                                <h4>Support</h4>
                                <div className="products-values">
                                    <li>Request Form</li>
                                    <li>Contact Support</li>
                                    <li>FAQ</li>
                                    <li>Glossary</li>
                                </div>
                            </div>
                            <div className="products-column">
                                <h4>Socials</h4>
                                <div className="products-values">
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Telegram</li>
                                    <li>Instagram</li>
                                    <li>Interactive Chat</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-footer-bottom">
                    <div className="footer-info-bottom">
                        <div className="bottom-footer-info-left">
                            <div className="bottom-footer-all-rights-reverse">
                                <div>
                                    © 2021 CoinMarketCap. All rights reserved
                                </div>
                            </div>
                        </div>
                        <div className="bottom-footer-info-right">
                            <div className="bottom-footer-total-logo">
                                <div>
                                    <img src={btn_ios} alt="btn-ios" height="36px"></img>
                                </div>
                                <div>
                                    <img src="data:image/png;base64,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" alt="btn-android" height="36px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
);
    }
}

export default Footer;