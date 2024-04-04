import '../../App.css'
import './index.css'
import Header from '../../components/Header'
import headphones from '../../assets/image-removebg-preview(41).svg'
import speakers from '../../assets/image-removebg-preview(38).svg'
import earphones from '../../assets/Group 5.svg'
import arrow from '../../assets/icon-arrow-right.08d4cd77.svg'
import product_one from '../../assets/image-removebg-preview(38) (1).svg'
import product_two from '../../assets/Bitmap 3.svg'
import product_three from '../../assets/Group 12.svg'
import boy from '../../assets/boy.svg'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <>
            <main className='main'>
                <Header></Header>
                <div className="container">
                    <div className="banner d-flex">
                        <div className="banner_info">
                            <span>NEW PRODUCT</span>
                            <h1>XX99 Mark II Headphones</h1>
                            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                            <NavLink to='/headphone1'><button className="btn banner_btn">See Product</button></NavLink>
                        </div>
                    </div>
                </div>
            </main>

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
                <div className="home-products-section d-flex flex-column">
                    <div className="product-one">
                        <div className="product-one-image">
                            <img src={product_one} alt="" />
                        </div>
                        <div className="product-one-content">
                            <h1>ZX9 SPEAKER</h1>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <NavLink to='/speaker1'><button className="btn product-one-btn">See Product</button></NavLink>
                        </div>
                    </div>
                    <div className="product-two">
                        <img src={product_two} alt="" />
                        <div className="product-two-content">
                            <h1>ZX7 SPEAKER</h1>
                            <NavLink to='/speaker2'><button className="btn product-two-btn">See product</button></NavLink>
                        </div>
                    </div>
                    <div className="product-three">
                        <div className="product-three-image">
                            <img src={product_three} alt="" />
                        </div>
                        <div className="product-three-content">
                            <h1>YX1 EARPHONES</h1>
                            <NavLink to='/earphone'><button className="btn product-three-btn">See Product</button></NavLink>
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
            <Footer></Footer>
        </>
    )
}

export default Home