import '../../App.css'
import '../index.css'
import earphone from '../../assets/Group 5 (1).svg'
import Content from '../../components/Content'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import useFetch from '../../hooks/usefetch'
import { useState, useEffect } from 'react'

function Earphones() {
  const [data, setData] = useState();
  const { data: productions, isPending, error } = useFetch('http://localhost:3001/data');


  useEffect(() => {
    if (productions) {
      const filteredProducts = productions.filter(product => product.category === 'earphones');
      setData(filteredProducts);
    }
  }, [productions]);
  console.log(error)
  return (
    <>
      <Header></Header>
      <div style={{ backgroundColor: '#141414' }} className='d-flex align-items-center justify-content-center'>
        <h1 className="title">Earphones</h1>
      </div>
      <div className="container">
        <div className="earphones-section d-flex flex-column">
        {
                        data && data.map((product, index) => {
                            return (
                                <div className={`earphone d-flex ${index % 2 == 0 ? '' : 'flex-row-reverse'}`} key={index}>
                                    <div className="earphone-image">
                                        <img src={product.categoryImage.desktop} alt="" />
                                    </div>
                                    <div className="earphone-content d-flex flex-column">
                                        <span>{product.new && 'NEW PRODUCT'}</span>
                                        <h1>{product.name}</h1>
                                        <p>{product.description}</p>
                                        <NavLink to='/earphone'><button className="btn earphone-btn">See Product</button></NavLink>
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

export default Earphones