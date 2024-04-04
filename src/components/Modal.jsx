import './index.css'
import basketPrImg from '../assets/image-removebg-preview(47) (1).svg'
import { NavLink } from 'react-router-dom'

function Modal() {
  return (
    <>
           <div className="basket-modal">
                            <div className="count-remove">
                                <h1>Cart(1)</h1>
                                <p>Remove all</p>
                            </div>
                            <div className="basket-products">
                                <div className="basket-product">
                                    <div className="basket-product-image">
                                        <img src={basketPrImg} alt="" />
                                    </div>
                                    <div className="basket-product-name-cost">
                                        <h1>XX99 MK II</h1>
                                        <p>$ 2,999</p>
                                    </div>
                                    <div className="basket-product-counter">
                                        <button className="counter-btn d-flex align-items-center justify-content-center gap-3"><p>-</p>1<p>+</p></button>
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h1>Total</h1>
                                <p>$0</p>
                            </div>
                            <NavLink to='/checkout'><button className="checkout">Checkout</button></NavLink>
                        </div>
    </>
  )
}

export default Modal