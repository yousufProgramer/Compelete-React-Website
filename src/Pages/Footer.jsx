import React from 'react'
import './Footer.css'
import ScrollToTop from "react-scroll-to-top";
function Footer() {
  return (
    <div>
      <ScrollToTop smooth top = '900' color='#fff' className='topScroll'/>
      <div className='footer py-5'>
        <h4>© Copyright <span>Impact</span>. All Rights Reserved</h4>
        <p>Designed by Yousuf ahmed</p>
    </div>
    </div>
  )
}

export default Footer