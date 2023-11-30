// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage'
import Map from './map';
function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>} ></Route>
          <Route path='/map' element={<Map></Map>} ></Route>
        </Routes>
       </Router>
    </>
  )
}

export default App
