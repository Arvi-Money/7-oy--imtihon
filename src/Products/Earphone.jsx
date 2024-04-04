import '../App.css'
import './index.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import earphone from '../assets/Group 5 (1).svg'
import collage1 from '../assets/Bitmap (21).svg'
import collage2 from '../assets/Bitmap (22).svg'
import collage3 from '../assets/Bitmap (23).svg'
import commodity1 from '../assets/image-removebg-preview(41) (2).svg'
import commodity2 from '../assets/image-removebg-preview(48) (1).svg'
import commodity3 from '../assets/image-removebg-preview(38) (3).svg'
import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function Earphone() {

  function goBack() {
    history.goBack();
  }
  return (
    <>
      <Header></Header>
      <div className="container">
        <p className="back" onClick={goBack}>Go Back</p>
        <div className="headphones-section d-flex flex-column m-0">
          <div className="headphone">
            <div className="headphone-image">
              <img src={earphone} alt="" />
            </div>
            <div className="headphone-content d-flex flex-column">
              <span>New Product</span>
              <h1>YX1 WIRELESS EARPHONES</h1>
              <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
              <h4>$ 599</h4>
              <div className='d-flex gap-2 align-items-center'>
                <button className="btn counter d-flex align-items-center justify-content-center gap-3"><p>-</p>1<p>+</p></button>
                <button className="btn headphone-btn m-0">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="information">
            <div className="leftside">
              <h1>FEATURES</h1>
              <p>Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. <br /> <br /> The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.</p>
            </div>
            <div className="rightside">
              <h1>in the box</h1>
              <div className='d-flex flex-column gap-2'>
                <div className='d-flex gap-4' >
                  <span>2x</span>
                  <p>Earphone Unit</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>6x</span>
                  <p>Multi-size Earplugs</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>User Manual</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>USB-C Charging Cable</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>Travel Pouch</p>
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

export default Earphone