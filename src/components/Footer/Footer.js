import React from 'react'
import "./footer.css"
import Logo from "../Assets/Logo2.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <h2>RG Fitness Club</h2>
            </div>

            <div className='footer-content'>
                <div className='footer-column'>
                    <h3>Links</h3>
                    <ul className='com'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Connect Us</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Workout</h3>
                    <ul className='com'>
                        <li>Chest</li>
                        <li>Back</li>
                        <li>Shoulder</li>
                        <li>Biceps & Tricep</li>
                        <li>Leg</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h3>Legal</h3>
                    <ul className='legal'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Payment Terms</li>
                    </ul>
                    <img className="footer-logo" src={Logo} />
                    <div className="social-icons">
                        <a href='#'><i class="fa-brands fa-facebook-f first"></i></a>
                        <a href='#'><i class="fa-brands fa-instagram second"></i></a>
                        <a href='#'><i class="fa-brands fa-x-twitter third"></i></a>
                        <a href='#'><i class="fa-brands fa-linkedin-in fourth"></i></a>
                    </div>
                </div>
            </div>
            <div className='lasthai'>
                <p>All Right Reserve to <span>RG Fitness Club</span></p>
                <p>For more website contact us <span><a href='#'>careersweb0001@gmail.com</a></span></p>
            </div>
        </div>
    )
}

export default Footer
