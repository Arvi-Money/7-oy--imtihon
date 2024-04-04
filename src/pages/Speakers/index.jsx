import '../../App.css'
import '../index.css'
// import speaker1 from '../../assets/image-removebg-preview(38) (2).svg'
// import speaker2 from '../../assets/image-removebg-preview(49).svg'
import Header from '../../components/Header'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import useFetch from '../../hooks/usefetch'
import { useState, useEffect } from 'react'


function Speakers() {
  const [data, setData] = useState();
  const { data: productions, isPending, error } = useFetch('http://localhost:3001/data');


  useEffect(() => {
    if (productions) {
      const filteredProducts = productions.filter(product => product.category === 'speakers');
      setData(filteredProducts);
    }
  }, [productions]);

  return (
    <>
      <Header></Header>
      <div style={{ backgroundColor: '#141414' }} className='d-flex align-items-center justify-content-center'>
        <h1 className="title">Speakers</h1>
      </div>
      <div className="container">
        <div className="speakers-section d-flex flex-column">
          {
            data && data.map((product, index) => {
              return (
                <div className={`headphone d-flex ${index % 2 == 0 ? '' : 'flex-row-reverse'}`} key={index}>
                  <div className="headphone-image">
                    <img src={product.categoryImage.desktop} alt="" />
                  </div>
                  <div className="headphone-content d-flex flex-column">
                    <span>{product.new && 'NEW PRODUCT'}</span>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <NavLink to='/speaker1'><button className="btn headphone-btn">See Product</button></NavLink>
                  </div>
                </div>
              )
            })
          }
          <Content></Content>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Speakers