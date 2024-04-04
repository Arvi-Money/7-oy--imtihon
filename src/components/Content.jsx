import './index.css'
import '../App.css'
import headphones from '../assets/image-removebg-preview(41).svg'
import speakers from '../assets/image-removebg-preview(38).svg'
import earphones from '../assets/Group 5.svg'
import arrow from '../assets/icon-arrow-right.08d4cd77.svg'
import boy from '../assets/boy.svg'
import { NavLink } from 'react-router-dom'

function Content() {
    return (
        <div className="container">
            <div className="products_wrapper">
                <div className="product">
                    <div className="product_img">
                        <img src={headphones} alt="" />
                    </div>
                    <div className="product_body">
                        <h1>Headphones</h1>
                        <NavLink to='/headphones'>
                        <div className="shop">
                            <p>shop</p>
                            <img src={arrow} alt="" />
                        </div>
                        </NavLink>
                    </div>
                </div>
                <div className="product">
                    <div className="product_img">
                        <img src={speakers} alt="" />
                    </div>
                    <div className="product_body">
                        <h1>Speaker</h1>
                        <NavLink to='/speakers'>
                        <div className="shop">
                            <p>shop</p>
                            <img src={arrow} alt="" />
                        </div>
                        </NavLink>
                    </div>
                </div>
                <div className="product">
                    <div className="product_img">
                        <img src={earphones} alt="" />
                    </div>
                    <div className="product_body">
                        <h1>Earphones</h1>
                        <NavLink to='/earphones'>
                        <div className="shop">
                            <p>shop</p>
                            <img src={arrow} alt="" />
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="content-section">
                <div className="content-section-info">
                    <h1>Bringing you the <span style={{ color: '#D87D4A' }}>best</span> audio gear</h1>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className="content-section-image">
                    <img src={boy} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content