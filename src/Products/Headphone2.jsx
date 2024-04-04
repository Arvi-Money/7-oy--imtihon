import '../App.css'
import './index.css'
import headphone from '../assets/image-removebg-preview(41) (1).svg'
import collage1 from '../assets/Bitmap (9).svg'
import collage2 from '../assets/Bitmap (10).svg'
import collage3 from '../assets/Bitmap (11).svg'
import commodity1 from '../assets/image-removebg-preview(41) (2).svg'
import commodity2 from '../assets/image-removebg-preview(48) (1).svg'
import commodity3 from '../assets/image-removebg-preview(38) (3).svg'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { NavLink,  } from 'react-router-dom'

function Headphone2() {
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
              <h1>XX99 Mark I Headphones</h1>
              <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. </p>
              <h4>$ 1,750</h4>
              <div className='d-flex gap-2 align-items-center'>
                <button className="btn counter d-flex align-items-center justify-content-center gap-3"><p>-</p>1<p>+</p></button>
                <button className="btn headphone-btn m-0">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="information">
            <div className="leftside">
              <h1>FEATURES</h1>
              <p>As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. <br /> <br /> From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
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
                  </NavLink>              </div>
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

export default Headphone2