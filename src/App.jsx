import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers/index'
import Earphones from './pages/Earphones/index'
import Headphone1 from './Products/Headphone1'
import Headphone2 from './Products/Headphone2'
import Headphone3 from './Products/Headphone3'
import Speaker1 from './Products/Speaker1'
import Speaker2 from './Products/Speaker2'
import Earphone from './Products/Earphone'
import Checkout from './pages/Checkout/Checkout'
import Register from './pages/Register'
import { useState } from 'react'
import { useEffect } from 'react'



function ProtectedRoute({children, isAuthenticated}) {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate('/')
  }
  return children
}

function App() {
  const [token, setToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
  }
}, [token])

  return (
    <>
    <Routes>
      {/* {public route} */}
      <Route path='/register' element={<Register></Register>}/>
      {/* {protected route} */}
      <Route path='/' element={
        <ProtectedRoute isAuthenticated={token ? true : false}>
          <Home/>
        </ProtectedRoute>
      } />
      <Route path='/headphones' element={<Headphones/>} />
      <Route path='/speakers' element={<Speakers/>} />
      <Route path='/earphones' element={<Earphones/>} />
      <Route path='/headphone1' element={<Headphone1></Headphone1>}/>
      <Route path='/headphone2' element={<Headphone2></Headphone2>}/>
      <Route path='/headphone3' element={<Headphone3></Headphone3>}/>
      <Route path='/speaker1' element={<Speaker1></Speaker1>}/> 
      <Route path='/speaker2' element={<Speaker2></Speaker2>}/>
      <Route path='/earphone' element={<Earphone></Earphone>}/>
      <Route path='/checkout' element={<Checkout></Checkout>}/>
    </Routes>

    </>
  )
}

export default App
