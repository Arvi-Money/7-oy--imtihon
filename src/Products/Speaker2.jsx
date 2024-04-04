import '../App.css'
import './index.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import speaker from '../assets/image-removebg-preview(49).svg'
import collage1 from '../assets/Bitmap (18).svg'
import collage2 from '../assets/Bitmap (19).svg'
import collage3 from '../assets/Bitmap (20).svg'
import commodity1 from '../assets/image-removebg-preview(41) (2).svg'
import commodity2 from '../assets/image-removebg-preview(48) (1).svg'
import commodity3 from '../assets/image-removebg-preview(38) (3).svg'
import { NavLink } from 'react-router-dom'

function Speaker2() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <p className="back">Go Back</p>
        <div className="headphones-section d-flex flex-column m-0">
          <div className="headphone">
            <div className="headphone-image">
              <img src={speaker} alt="" />
            </div>
            <div className="headphone-content d-flex flex-column">
              <h1>ZX7 SPEAKER</h1>
              <p>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
              <h4>$ 3,500</h4>
              <div className='d-flex gap-2 align-items-center'>
                <button className="btn counter d-flex align-items-center justify-content-center gap-3"><p>-</p>1<p>+</p></button>
                <button className="btn headphone-btn m-0">Add To Cart</button>
              </div>
            </div>
          </div>

          <div className="information">
            <div className="leftside">
              <h1>FEATURES</h1>
              <p>Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. <br /> <br /> The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
            </div>
            <div className="rightside">
              <h1>in the box</h1>
              <div className='d-flex flex-column gap-2'>
                <div className='d-flex gap-4' >
                  <span>2x</span>
                  <p>Speaker Unit</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>2x</span>
                  <p>Speaker Cloth Panel</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>User Manual</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>3.5mm 5m Audio Cable</p>
                </div>
                <div className='d-flex gap-4'>
                  <span>1x</span>
                  <p>7.5m Optical Cable</p>
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

export default Speaker2