import React from 'react'
import listData from './ServicesData.jsx'
import { AiOutlineArrowRight} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import './Services.css'
function Services() {
  const navigate = useNavigate()
  return (
    <div className='servicesMain py-5'>
      <div className='container'>
      <div className='services'>
        <div className='servicesItem common'>
        <h2>Our Services</h2>
        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
        </div>
         <div className='row'>
               {listData.map((item)=>(
                <div className='col-lg-4 col-md-6 col-sm-12'>
                 <div className='item shadow m-2 p-4'    data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1000">
                   <h2>{item.icon}</h2>
                   <h3>{item.name}</h3>
                   <p>{item.Description}</p>
                   <button onClick={(()=>{
                     navigate('/')
                   })}>Leran More <span><AiOutlineArrowRight/></span></button>
                 </div>
                 </div>
               ))}
         </div>
      </div>
      </div>
    </div>
      
  )
}

export default Services