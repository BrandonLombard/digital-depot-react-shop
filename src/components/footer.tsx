import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import logo from "/images/logo.png";

export class Footer extends Component {
    render() {
        return(
            <Container>
                <div className="separator"></div>
                <div id="footer-columns">
                    <div className="footer-col">
                        <div className="footer-links">
                            <img src={logo} className="logo"></img> Digital Depot
                            <div className="footer-links">
                                <a href="/">Home</a>
                                <a href="/Store">Store</a>
                                <a href="/About">About</a>
                            </div>
                            <div className="footer-links sm-text">
                                1209 Fictional Blvd. <br></br>
                                Boston, MA 02109
                                <br></br><br></br>
                                1(000)000-0000
                            </div>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-links">
                            <div className="footer-title">
                                <img src="images/account.png" className="footer-social"></img>
                                My Account
                            </div>
                            <a href="#" title="This is only an example link">Login</a>
                            <a href="#" title="This is only an example link">Register</a>
                            <a href="#" title="This is only an example link">Order History</a>
                        </div>
                        <div className="footer-links">
                            <div className="footer-title">
                                <img src="images/help-center.png" className="footer-social"></img>
                                Help Center
                            </div>
                            <a href="#" title="This is only an example link">Customer Service</a>
                            <a href="#" title="This is only an example link">Track an Order</a>
                            <a href="#" title="This is only an example link">Return an item</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-links">
                            <div className="footer-title">
                                <img src="images/careers.png" className="footer-social"></img>
                                Careers
                            </div>
                            <a href="#" title="This is only an example link">Apply Online</a>
                            <a href="#" title="This is only an example link">Check Application Status</a>
                            <a href="#" title="This is only an example link">About Us</a>
                        </div>
                        <div className="footer-links">
                            <div className="footer-title">
                                <img src="images/resources.png" className="footer-social"></img>
                                Resources
                            </div>
                            <a href="#" title="This is only an example link">Privacy & Security</a>
                            <a href="#" title="This is only an example link">Become an Affiliate</a>
                            <a href="#" title="This is only an example link">Privacy & Security</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-links">
                            <div className="footer-title">
                            <img src="images/social.png" className="footer-social"></img>
                                Social
                            </div>
                            <a href="#" title="This is only an example link">
                                <img src="images/linkedin.png" className="footer-social"></img>
                            </a>
                            <a href="#" title="This is only an example link">
                                <img src="images/twitter.png" className="footer-social"></img>
                            </a>
                            <a href="#" title="This is only an example link">
                                <img src="images/facebook.png" className="footer-social"></img>
                            </a>
                        </div>
                        <div className="footer-links">
                            <div className="footer-title">
                                <img src="images/creator.png" className="footer-social"></img>
                                Creator Info
                            </div>
                            <a href="#" title="This is only an example link">Portfolio</a>
                            <a href="#" title="This is only an example link">LinkedIn</a>
                            <a href="#" title="This is only an example link">GitHub</a>
                        </div>
                    </div>
                </div>
                
            </Container>
            
        )
    }
    
   
}