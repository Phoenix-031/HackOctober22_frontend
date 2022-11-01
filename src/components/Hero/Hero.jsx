import {React,useState} from 'react'
import banner from '../../assets/school-work-851328.jpg'
import './hero.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {


  const [insname,setInsname] = useState("");
  const [year,setYear] = useState("");
  const [semester,setSemester] = useState("");
  const [department,setDepartment] = useState("");
  
  const navigate = useNavigate()

  const handleSearch = async(e) => {
    e.preventDefault()
    
    // const result =

  }
  
  return (
    <>
     <section id="hero">
      <div className="hero-img">
        <img src={banner} alt="" />
        <div className="hero-heading">
          <h1>An Investment in Knowledge Pays the Best Interest</h1>
          <div className="container-hero">
            <form action="#" onSubmit={handleSearch}>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Institute Name"
                  id="getEmail"
                  required
                  onChange={(e)=>{
                    setInsname(e.target.value)
                  }}
                />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Department"
                  id="getPass"
                  required
                  onChange={(e)=>{
                    setDepartment(e.target.value)
                  }}
                />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input type="text" 
                placeholder="Year" 
                id="getPass" 
                required 
                onChange={(e)=>{
                    setYear(e.target.value)
                }}
                />
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                <input
                  type="text"
                  placeholder="Semester"
                  id="getPass"
                  required
                  onChange={(e)=>{
                    setSemester(e.target.value)
                  }}
                />
                <div className="underline"></div>
              </div>

              <button className="input-box button">
                <input
                  type="submit"
                  name=""
                  value="Search"
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