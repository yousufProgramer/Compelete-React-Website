import React from 'react'
import dataList from './HeaderBoxData.jsx'
import './HeaderBox.css'
function HeaderBox() {
  return (
    <>
       <div className='headerBox py-5'>
          <div className='headingBox'>
            <div className='container'>
            <div className='row'>
               
                  {dataList.map((item)=>(
                    <div className='col-lg-3 col-md-6 col-sm-12 ' >
                    <div className='boxItem m-2 shadow' data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1000">
                        <span>{item.icon}</span>
                        <h3>{item.name}</h3>
                    </div>
                     </div>
                  ))}
              
            </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default HeaderBox