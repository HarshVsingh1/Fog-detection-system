// import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import About from './component/About'
import Footer from './component/Footer'
import List from './component/list'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <About/>
      <List/>
      <Footer/>
    </>
  )
}

export default App
