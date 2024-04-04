import '../App.css'
import './index.css'
import Header from "../components/Header"
// import headphone1 from '../assets/image-removebg-preview(47).svg'
// import collage1 from '../assets/Bitmap (6).svg'
// import collage2 from '../assets/Bitmap (7).svg'
// import collage3 from '../assets/Bitmap (8).svg'
// import commodity1 from '../assets/image-removebg-preview(41) (2).svg'
// import commodity2 from '../assets/image-removebg-preview(48) (1).svg'
// import commodity3 from '../assets/image-removebg-preview(38) (3).svg'
import Content from '../components/Content'
import Footer from '../components/Footer'
// import { NavLink } from 'react-router-dom'
import useFetch from '../hooks/usefetch'

function Headphones1() {

  const { data: products, isPending, error } = useFetch('http://localhost:3001/data');


  console.log(products);
  return (
    <>
      <Header></Header>
      <div className="container">
        <p className="back">Go Back</p>

        <Content></Content>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Headphones1