import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { fileUpload } from '../../api/api.file';
import './upload.css'

const UpoadFile = () => {

  const [insname,setInsname] = useState("");
  const [year,setYear] = useState("");
  const [semester,setSemester] = useState("");
  const [department,setDepartment] = useState("");
  const [subject,setSubject] = useState("");
  const [file,setFile] = useState("")
  const [filename,setFilename] = useState("")
  const navigate = useNavigate()

  // useEffect(()= >{

  // },[filename])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contributor = "debayan"
    // console.log(file)

    if(!file) {
      swal("No file has been uploaded!")
      return;
    } 
  
    console.log(contributor,insname,year,semester,department)

    const res = await fileUpload(contributor,insname,year,semester,department,file)
    // console.log(res)
    if(res.data.success){
      swal("Thankyou for your contribution!")
      setInsname("")
      setYear("")
      setDepartment("")
      setSubject("")
      setSemester("")
      setFile("")

      navigate('/')
    } else {
      swal(res.data.error)
    }
    
  }

  const handleupload = (e) => {

    const File = e.target.files[0]
    setFilename(File.name)
    console.log(File)
    
    const render = new FileReader()
    render.readAsDataURL(File)
    render.onload = (e) => {
      setFile(render.result)
    }
    console.log(file)
  }
  
  const handlefileExplore = (e) => {
    e.preventDefault()
    document.getElementById("fileupload-btn").click()
  }
  
  return (
    <>
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">Upload Files</a>
      </nav>
    </header>
    <div className="container-upload w-full">
      <form className="form-style-9 flex gap-6 justify-center items-center w-full" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              className="field-style field-split align-left rounded-lg"
              placeholder="Institute Name"
              required
              value={insname}
              onChange={(e) => {
                setInsname(e.target.value);
              }}
            />
            <div className="underline"></div>
            <select id="year" className="field-style field-split align-left ml-2 rounded-lg" required 
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="year">Year</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
            <div className="underline"></div>
          </li>
          <li className='flex justify-between items-center flex-col'>
            <select id="semester" className="field-style field-split align-left rounded-lg" required 
              onChange={(e) => {
                setSemester(e.target.value);
              }}
            >
              <option value="semester">Semester</option>
              <option value="1">first</option>
              <option value="2">second</option>
              <option value="3">third</option>
              <option value="4">fourth</option>
              <option value="5">fifth</option>
              <option value="6">sixth</option>
              <option value="7">seventh</option>
              <option value="8">eighth</option>«
            </select>

            <select name="field4" 
               className="field-style field-split align-right ml-2 rounded-lg"
                  onChange={(e)=>{
                    setDepartment(e.target.value)
                  }}
                >
                  <option value="Department">Department</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="ME">ME</option>
            </select>
            
            {/* <div className="underline"></div> */}
          </li>
          <li>
            <input
              type="text"
              name="field3"
              className="field-style field-full align-none rounded-lg"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <div className="underline"></div>
          </li>
          <li>
            <textarea
              name="field5"
              className="field-style rounded-lg"
              placeholder="Message"
            ></textarea>
            <div className="underline"></div>
          </li>
          <li>
            <button type="submit" value="Submit" className='font-semibold text-black bg-yellowtheme font-nunito w-max px-14 py-5 rounded-xl text-2xl'>Submit</button>
          </li>
        </ul>
      <div className="drag-area">
        <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button onClick={handlefileExplore}>Browse File</button>
        <input 
        id='fileupload-btn'
        type="file" 
        name="fileupload"
        onChange={handleupload}
        hidden
         />
      {filename && <div className='flex gap-4 justify-center items-center text-xl font-semibold font-nunito text-black p-4 py-5 px-10 bg-green-200 mt-5 rounded-lg text-center'>
        <i className="fa-solid fa-square-xmark text-4xl cursor-pointer text-red-600 hover:opacity-80" onClick={(e) => {
          setFilename("")
          setFile("")
        }}></i>
        {filename}
        </div>}
      </div>
      </form>
    </div>
    </>
  )
}

export default UpoadFile