import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img  src={assets.logo} alt='' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima maiores vitae cum culpa sint perferendis nulla placeat aperiam voluptatibus velit voluptas, non dolor natus quae aspernatur expedita explicabo rerum!</p>
                        <div className="footer-social-icons">
                            <img src={assets.linkedin_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.facebook_icon} alt="" />
                        </div>
                    </div>
                    <div className="footer-content-centre">
                           <h2>COMPANY</h2>
                           <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                           </ul>
                    </div>
                    <div className="footer-content-right">
                           <h2>GET IN TOUCH</h2>
                           <ul>
                            <li>7973637511</li>
                            <li>ashutoshjha797@gmail.com</li>
                           </ul>
                    </div>


                </div>
                <hr/>
                <p className="footer-copyright">Copyright 2024 @ Aniket.com-All Right Reserved.</p>
            </div>
        
    )
}

export default Footer
