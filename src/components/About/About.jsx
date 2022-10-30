import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <section id="about" className='overflow-x-scroll'>
      <div className="wrapper flex ">
        <div className="carousel owl-carousel flex gap-4">
          <div className="card card-1 flex justify-center items-center p-10 cursor-pointer">Practice Problems for Exams</div>
          <div className="card card-2 flex justify-center items-center p-10 cursor-pointer">Complete Study Material</div>
          <div className="card card-3 flex justify-center items-center p-10 cursor-pointer">University Wise Syllabus</div>
          <div className="card card-4 flex justify-center items-center p-10 cursor-pointer">Sample Question Papers</div>
          <div className="card card-5 flex justify-center items-center p-10 cursor-pointer">Previous Years Questions</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About