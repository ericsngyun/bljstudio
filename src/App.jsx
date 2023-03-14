import { useState } from 'react'
import IntroScreen from './components/intro-screen/IntroScreen'
import Home from './components/Home'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      {/* <BrowserRouter>
      </BrowserRouter> */}
      <IntroScreen/>
      <Home />
      
    </>
  )
}

export default App
