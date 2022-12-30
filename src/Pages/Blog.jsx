import React from 'react'
import { useState } from 'react'
import listData from './BlogData.jsx'
import './Blog.css'
function Blog() {
  const [blog,setBlog] = useState(listData)

  return (
    <div className='main-blog'>
      <div className='blog'>
        <div className='container'>
          <div className='blog-container'>
            <div className='blogItem common'>
              <h2>My Blog</h2>
              <div className="row py-5">
                {
                  blog.map((blog) => (
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                       <div className='blogTopButton' data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1000">
                       <div className='blogtop-item '>
                          {blog.img1}
                          <h5>{blog.fastName}</h5>
                          <h6>{blog.title}</h6>
                       </div>
                       <div className='blogbutton'>
                        {blog.img2}
                        <div className='contentBlog'>
                        <strong>{blog.name}</strong>
                        <h6>{blog.date}</h6>
                        </div>
                       </div>
                       </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blog