import React from 'react'
import banner from '../../assets/education.jpg'

const Hero = () => {
  return (
    <>
    <section id="hero">
      <div className="hero-img">
        <img src={banner} alt="" className='object-cover'/>
        <div className="hero-heading flex flex-col justify-center items-center w-full">
          <h1>An Investment in Knowledge Pays the Best Interest</h1>
          <div className="wrap flex justify-center items-center">
            <div className="search max-w-2xl">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero