import React from 'react'
import './Header.css'
import {IoLogoYoutube} from "react-icons/io";
function Header() {
  return (
    <section className='mainHeader'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="zoom-in"
                data-aos-duration="2000">
                    <div className='headerLeft'>
                       <h1>Welcome to Impact</h1>
                       <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                       <button className='btn left'>Get Started</button>
                       <button className='btn left right'><span><IoLogoYoutube/></span>Watch Video</button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12' data-aos="zoom-in"
                data-aos-duration="2000">
                    <img
                 className="w-100 headerImg"
                 src="hero-img.svg"
                alt="Second slide"
                    />

                   
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header