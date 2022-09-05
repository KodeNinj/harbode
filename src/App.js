import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/scroll'
import Explore from './pages/Explore'
import Home from './pages/Home'
const App = () => {
  return (


    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/explore" element={<Explore/> }/>
        </Routes>
        </ScrollToTop>
    </BrowserRouter>
  )
}

export default App