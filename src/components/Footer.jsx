import '../App.css'
import './index.css'
import logo from '../assets/logo.ad23a5d0.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'
import twitter from '../assets/icon-twitter.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="footer-nav">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <nav>
                                <NavLink to="/">HOME</NavLink>
                                <NavLink to="/headphones">HEADPHONES</NavLink>
                                <NavLink to="/speakers">SPEAKERS</NavLink>
                                <NavLink to="/earphones">EARPHONES</NavLink>
                            </nav>
                        </div>
                        <div className="footer-body">
                            <div className="text">
                                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                                <p>Copyright 2021. All Rights Reserved</p>
                            </div>
                            <div className="icons">
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer