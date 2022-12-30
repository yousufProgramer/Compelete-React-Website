import React from 'react'
import Header from './Header'
import HeaderBox from './HeaderBox'
import Services from './Services'
import About from './About'
import Carousel from './Carousel'
import Team from './Team'
import Blog from './Blog'
// import AddressBar from './AddressBar'
function Home() {
  return (
    <div>
      
      {/* <AddressBar /> */}
      <Header />
      <main className='mt-4'>

      <HeaderBox />
      <Services />
      <About />
      <Blog />
      <Carousel />
      <Team />
      </main>
    </div>
  )
}

export default Home