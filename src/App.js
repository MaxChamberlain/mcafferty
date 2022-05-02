import { useState, useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import { Route, Routes } from 'react-router-dom'
import Login from './Components/LoginPage/Login'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Settings from './Components/Settings/Settings'

export default function App() {
  const [ loggedIn, setLoggedIn ] = useState(false)
  
  useEffect(() => {
    if(document.cookie.includes('_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242')) {
        setLoggedIn(true)
    }
  }, [])
  
  if(loggedIn){
    return (
      <AnimatePresence>
        <Header />
        <div style={{ marginBottom: 90 }}></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </AnimatePresence>
    )
  }else{
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          height: '300px',
          width: '800px',
          alignSelf: 'center',
          backgroundColor: '#f2f2f2',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 20,
            marginTop: 10,
          }}>
            <span style={{ 
              color: 'black',
              cursor: 'pointer',
              }}>
                Login
            </span>
          </div>
          <div>
              <Login />
          </div>
        </div>
      </div>
    )
  }
}
