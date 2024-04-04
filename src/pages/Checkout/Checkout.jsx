import '../../App.css'
import '../index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import cashOnDeliveryImg from '../../assets/Shape.svg'
import { useState } from 'react'


function Checkout() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: ''
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      let errors = {};
  
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
  
      if (!formData.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone Number is required';
      }
  
      if (!formData.address.trim()) {
        errors.address = 'Address is required';
      }
  
      if (!formData.zipCode.trim()) {
        errors.zipCode = 'ZIP Code is required';
      }
  
      if (!formData.city.trim()) {
        errors.city = 'City is required';
      }
  
      if (!formData.country.trim()) {
        errors.country = 'Country is required';
      }
  
      if (Object.keys(errors).length === 0) {
        console.log('Form submitted:', formData);
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          address: '',
          zipCode: '',
          city: '',
          country: ''
        });
        setErrors({});
      } else {
        setErrors(errors);
      }
    }

  return (
    <>
      <Header></Header>
      <div className="checkout-section">
        <div className="container">
        <p className="back">Go Back</p>
          <div className="checkout-wrapper">
            <form className='form' onSubmit={handleSubmit}>
              <h1>Checkout</h1>
              <div className="details">
                <h2>Billing Details</h2>
                <div className='row gap-3 mb-4'>
                  <div className='col '>
                    <label htmlFor="" className='mb-2'>Name</label>
                    <input type="text" placeholder='Alexei Ward' value={formData.name} onChange={handleChange}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className='col '>
                    <label htmlFor="" className='mb-2'>Email Address</label>
                    <input type="email" placeholder='alexei@mail.com' value={formData.email} onChange={handleChange}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className='col'>
                  <label htmlFor="" className='mb-2'>Phone Number</label>
                  <input type="number" placeholder='+1 202-555-0136' className='w-100' value={formData.phoneNumber} onChange={handleChange}/>
                  {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="info">
                <h2>shipping info</h2>
                <div className='mb-4'>
                  <label htmlFor="" className='mb-2'>Address</label>
                  <input type="address" placeholder='1137 Williams Avenue' value={formData.address} onChange={handleChange}/>
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div className='row gap-3 mb-4'> 
                  <div className='col'>
                    <label htmlFor="" className='mb-2'>ZIP Code</label>
                    <input type="number" placeholder='10001' value={formData.zipCode} onChange={handleChange}/>
                    {errors.zipCode && <p className="error">{errors.zipCode}</p>}
                  </div>
                  <div className='col'>
                    <label htmlFor="" className='mb-2'>City</label>
                    <input type="text" placeholder='New York' value={formData.city} onChange={handleChange}/>
                    {errors.city && <p className="error">{errors.city}</p>}
                  </div>
                </div>
                <div className='col mb-4' style={{width: '309px'}}>
                  <label htmlFor="mb-2">Country</label>
                  <input type="text" placeholder='United States' value={formData.country} onChange={handleChange}/>
                  {errors.country && <p className="error">{errors.country}</p>}
                </div>
              </div>

              <div className="payment">
                <h2>Payment Details</h2>
                <div className='row'>
                  <label htmlFor="" className='col'>Payment Method</label>
                  <div className='col payments'>
                    <div className='money mb-3'>
                      <input type="radio" id="eMoney" name="payment" value="eMoney" className='col' />
                      <label htmlFor="eMoney" className='col'>e-Money</label>
                    </div>
                    <div className=' cash '>
                      <input type="radio" id="cashOnDelivery" name="payment" value="cashOnDelivery" />
                      <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cashOnDelivery">
                  <img src={cashOnDeliveryImg} alt="" />
                  <div className="text">
                    <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Checkout