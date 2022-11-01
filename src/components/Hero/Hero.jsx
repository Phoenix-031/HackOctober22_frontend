import React from 'react'
import banner from '../../assets/education.jpg'
import './hero.css'

const Hero = () => {
  return (
    <>
    <section id="hero">
      <div className="hero-img">
        <img src={banner} alt="" />
        <div className="hero-heading">
          <h1>An Investment in Knowledge Pays the Best Interest</h1>
          <div className="container">
            <form>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Institute Name"
                  id="getEmail"
                  required
                />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Department"
                  id="getPass"
                  required
                />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input type="text" placeholder="Year" id="getPass" required />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Semester"
                  id="getPass"
                  required
                />
                <div className="underline"></div>
              </div>

              <button className="input-box button">
                <input
                  type="submit"
                  name=""
                  value="Submit"
                  className="btn"
                  id="button"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero