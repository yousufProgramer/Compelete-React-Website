import React from 'react'
import listData from './teamData.jsx'
import './team.css';
function Team() {
  return (
    <div>
      <div className='teamMain py-5'>
        <div className='container'>
        <div className='team'>
           <div className='teamItem common py-3'>
           <h2 className='pb-2'>Our Team</h2>
           <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
           </div>
           <div className='row'>
           {listData.map((item)=>(
            <div className="col-lg-3 col-md-6 col-md-12 my-3" >
            <div className="card shadow m-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
              {item.img}
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.job}</p>
                <span>{item.icon1}</span>
                <span>{item.icon2}</span>
                <span>{item.icon3}</span>
                <span>{item.icon4}</span>
              </div>
            </div>
          </div>
           ))}
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team