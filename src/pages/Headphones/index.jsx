import '../../App.css'
import '../index.css'
import Header from "../../components/Header"
// import headphone1 from '../../assets/image-removebg-preview(47).svg'
// import headphone2 from '../../assets/image-removebg-preview(41) (1).svg'
// import headphone3 from '../../assets/image-removebg-preview(48).svg'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/usefetch'
import { useState, useEffect } from 'react'

function Headphones() {
    const [data, setData] = useState()
    const { data: productions } = useFetch('http://localhost:3001/data');
    const navigate = useNavigate();

    useEffect(() => {
        if (productions) {
            const filteredProducts = productions.filter(product => product.category === 'headphones');
            setData(filteredProducts);
        }
    }, [productions]);
    console.log(data);

    return (
        <>
            <Header></Header>
            <div style={{ backgroundColor: '#141414' }} className='d-flex align-items-center justify-content-center'>
                <h1 className="title">Headphones</h1>
            </div>
            <div className="container">
                <div className="headphones-section d-flex flex-column">
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
                                        <NavLink to='/headphone1'><button className="btn headphone-btn">See Product</button></NavLink>
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

export default Headphones