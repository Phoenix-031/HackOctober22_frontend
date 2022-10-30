import React from 'react'
import bannerpic from '../../assets/Banner-Blog-1A-1.jpg'

const Courses = () => {
  return (
    <>
    <div className="heading">
      <h1>Popular Courses</h1>
    </div>
    <section id="courses">
      <div className="row">
        <div className="course-img">
          <img src={bannerpic} alt="" />
        </div>
        <div className="course-text">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro
            molestias odio. Quaerat, et magnam.
          </p>
          <div className="course-btn">
            <button className="btn"><a href="/"> Click Here </a></button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="course-img">
          <img src={bannerpic} alt="" />
        </div>
        <div className="course-text">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro
            molestias odio. Quaerat, et magnam.
          </p>
          <div className="course-btn">
            <button className="btn"><a href="/"> Click Here </a></button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="course-img">
          <img src={bannerpic} alt="" />
        </div>
        <div className="course-text">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro
            molestias odio. Quaerat, et magnam.
          </p>
          <div className="course-btn">
            <button className="btn"><a href="/"> Click Here </a></button>
          </div>
        </div>
      </div>
      <button className="big-btn">
        <a href="/">See More</a>
      </button>
    </section>
    </>
  )
}

export default Courses