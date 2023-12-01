// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage'
import Map from './map';
import Map_page from './mappage';
function App() {
  

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>} ></Route>
          <Route path='/map' element={<Map></Map>} ></Route>
          <Route path='/mp' element={<Map_page></Map_page>}></Route>
        </Routes>
       </Router>
    </>
  )
}

export default App
