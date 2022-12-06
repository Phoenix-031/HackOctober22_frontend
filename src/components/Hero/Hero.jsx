import {React,useState} from 'react'
import banner from '../../assets/school-work-851328.jpg'
import './hero.css'
import { useNavigate } from 'react-router-dom'
import { filterItems } from '../../api/api.filter'
import swal from 'sweetalert'

const Hero = () => {


  const [insname,setInsname] = useState("");
  const [year,setYear] = useState("");
  const [semester,setSemester] = useState("");
  const [department,setDepartment] = useState("");
  
  const navigate = useNavigate()

  const handleSearch = async(e) => {
    e.preventDefault()
    if(insname === "" && year ==="" && semester === "" && department === "") {
      swal("All fields are empty")
    }
    else {
          console.log(insname,year,semester,department)
         const result =await filterItems(insname,year,semester,department)
         localStorage.setItem("files",JSON.stringify(result))
         navigate('/search')
    }


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
                {/* <input
                  type="text"
                  placeholder="Institute Name"
                  id="getEmail"
                  required
                  onChange={(e)=>{
                    setInsname(e.target.value)
                  }}
                /> */}
                <select name="Institute" id="getPass" 
                  onChange={(e)=>{
                    setInsname(e.target.value)
                  }}
                >
                  <option value="">Institute</option>
                  <option value="MAKAUT">MAKAUT</option>
                  <option value="JU">JU</option>
                  <option value="KIIT">KIIT</option>
                  <option value="MU">MU</option>
                  <option value="HIT">HIT</option>
                  <option value="DU">DU</option>
                </select>
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                {/* <input
                  type="text"
                  placeholder="Department"
                  id="getPass"
                  required
                  onChange={(e)=>{
                    setDepartment(e.target.value)
                  }}
                /> */}
                <select name="Department" id="getPass" 
                  onChange={(e)=>{
                    setDepartment(e.target.value)
                  }}
                >
                  <option value="">Department</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="ME">ME</option>
                </select>
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                {/* <input type="text" 
                placeholder="Year" 
                id="getPass" 
                required 
                onChange={(e)=>{
                    setYear(e.target.value)
                }}
                /> */}
                <select name="Year" id="getPass" 
                  onChange={(e)=>{
                    setYear(e.target.value)
                  }}
                >
                  <option value="">Year</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                </select>
                <div className="underline"></div>
              </div>
              <div className="input-box underline">
                {/* <input
                  type="text"
                  placeholder="Semester"
                  id="getPass"
                  required
                  onChange={(e)=>{
                    setSemester(e.target.value)
                  }}
                /> */}
                <select name="Semester" id="getPass" 
                  onChange={(e)=>{
                    setSemester(e.target.value)
                  }}
                >
                  <option className='option-bruh' value="">Semester</option>
                  <option className='option-bruh' value="1">First</option>
                  <option className='option-bruh' value="2">Second</option>
                  <option className='option-bruh' value="3">Third</option>
                  <option className='option-bruh' value="4">Fourth</option>
                  <option className='option-bruh' value="5">Fifth</option>
                  <option className='option-bruh' value="6">Sixth</option>
                  <option className='option-bruh' value="7">Seventh</option>
                  <option className='option-bruh' value="8">Eighth</option>
                </select>
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