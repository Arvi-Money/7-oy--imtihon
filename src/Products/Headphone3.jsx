import '../App.css'
import './index.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import headphone from '../assets/image-removebg-preview(48).svg'
import collage1 from '../assets/Bitmap (12).svg'
import collage2 from '../assets/Bitmap (13).svg'
import collage3 from '../assets/Bitmap (14).svg'
import commodity1 from '../assets/image-removebg-preview(41) (2).svg'
import commodity2 from '../assets/image-removebg-preview(48) (1).svg'
import commodity3 from '../assets/image-removebg-preview(38) (3).svg'
import { NavLink } from 'react-router-dom'

function Headphone3() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <p className="back">Go Back</p>
        <div className="headphones-section d-flex flex-column m-0">
          <div className="headphone">
            <div className="headphone-image">
              <img src={headphone} alt="" />
            </div>
            <div className="headphone-content d-flex flex-column">
              <span>NEW PRODUCT</span>
              <h1>XX59 Headphones</h1>
              <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
              <h4>$ 899</h4>
              <div className='d-flex gap-2 align-items-center'>
                <button className="btn counter d-flex align-items-center justify-content-center gap-3"><p>-</p>1<p>+</p></button>
                <button className="btn headphone-btn m-0">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="information">
            <div className="leftside">
              <h1>FEATURES</h1>
              <p>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. <br /> <br /> More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
            </div>
            <div className="rightside">
              <h1>in the box</h1>
              <div className='d-flex flex-column gap-2'>
                <div className='d-flex gap-4' >
                  <span>1x</span>
                  <p>Headphone Unit</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>2x</span>
                  <p>Replacement Earcups</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>User Manual</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>3.5mm 5m Audio Cable</p>
                </div>
              </div>
            </div>
          </div>

          <div className="collage d-flex gap-5">
            <div className='d-flex flex-column gap-5'>
              <img src={collage1} alt="" />
              <img src={collage2} alt="" />
            </div>
            <div>
              <img src={collage3} alt="" className='rounded' height="100%" />
            </div>
          </div>

          <div className="recommendation">
            <h1>you may also like</h1>
            <div className="commodities">
              <div className="commodity">
                <div className="commodity-image">
                  <img src={commodity1} alt="" />
                </div>
                <div className="commodity-body">
                  <h2>XX99 MARK I</h2>
                  <NavLink to='/headphone2'>
                    <button className="btn light-btn">See Product</button>
                  </NavLink>
                </div>
              </div>
              <div className="commodity">
                <div className="commodity-image">
                  <img src={commodity2} alt="" />
                </div>
                <div className="commodity-body">
                  <h2>XX99 MARK I</h2>
                  <NavLink to='/headphone3'>
                    <button className="btn light-btn">See Product</button>
                  </NavLink>
                </div>
              </div>
              <div className="commodity">
                <div className="commodity-image">
                  <img src={commodity3} alt="" />
                </div>
                <div className="commodity-body">
                  <h2>XX99 MARK I</h2>
                  <NavLink to='/speaker1'>
                    <button className="btn light-btn">See Product</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <Content></Content>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Headphone3