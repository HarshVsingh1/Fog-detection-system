import Nav from './component/Nav'
import About from './component/About'
import Footer from './component/Footer'
import List from './component/List'

// import { Video } from './component/Video'

function Homepage() {
    return <>
      <Nav/>
      <About/>
      <List/>
      {/* <Video/> */}
      <Footer/>
    </>
}

export default Homepage ;