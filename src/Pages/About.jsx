import React from 'react'
import { AiFillRightCircle} from "react-icons/ai";
import './Services'
import './About.css'
function About() {
  return (
    <div className='aboutItem py-5'>
       <div className='container'>
       <div className='about' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <div className='aboutItem common'>
                <h2>About Us</h2>
                <p >Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop
                 </p>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='aboutLeft m-3'>
                       <h2>Voluptatem dignissimos provident quasi corporis</h2>
                       <img className="w-100 aboutImg" src="about.jpg"  alt="About" />
                    <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.

                    Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                    </div>
                </div>

                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='aboutRight m-3'>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                     <ul className='aboutLink'>
                        <li className='nav-item'><span><AiFillRightCircle/></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>

                        <li className='nav-item'><span><AiFillRightCircle/></span>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li className='nav-item'><span><AiFillRightCircle/></span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</li>
                     </ul>
                     <img
                     className="w-100 aboutImg"
                      src="about-2.jpg"
                      alt="AboutImg-right"
                    />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default  About