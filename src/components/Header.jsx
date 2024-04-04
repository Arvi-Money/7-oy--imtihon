import './index.css'
import '../App.css'
import logo from '../assets/logo.ad23a5d0.svg'
import cart from '../assets/icon-cart.5bafe753.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'

function Header() {
    const [openModal, setOpenModal] = useState(false);

    function handleCartClick() {
        setOpenModal(!openModal);
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <nav>
                            <NavLink to="/">HOME</NavLink>
                            <NavLink to="/headphones">HEADPHONES</NavLink>
                            <NavLink to="/speakers">SPEAKERS</NavLink>
                            <NavLink to="/earphones">EARPHONES</NavLink>
                        </nav>
                        <div className="cart" onClick={handleCartClick} >
                            <img src={cart} alt="" />
                        </div>
                    </div>
                    {openModal && <Modal />}
                </div>
            </header>
        </>
    )
}

export default Header