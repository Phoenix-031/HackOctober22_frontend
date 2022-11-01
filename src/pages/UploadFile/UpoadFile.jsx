import React from 'react'
// import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      alert("No file has been uploaded!")
      return;
    } 
  
    console.log(contributor,insname,year,semester,department)

    const res = await fileUpload(contributor,insname,year,semester,department,file)
    // console.log(res)
    if(res.data.success){
      alert("Thankyou for your contribution!")
      setInsname("")
      setYear("")
      setDepartment("")
      setSubject("")
      setSemester("")
      setFile("")

      navigate('/')
    } else {
      alert(res.data.error)
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
      <form className="form-style-9 flex gap-4 justify-center items-center w-full" onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              className="field-style field-split align-left"
              placeholder="Institute Name"
              required
              value={insname}
              onChange={(e) => {
                setInsname(e.target.value);
              }}
            />
            <div className="underline"></div>
            <select id="year" className="field-style field-split align-left ml-2" required 
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="year">Year</option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
            </select>
            {/* <input
              type="number"
              name="field2"
              className="field-style field-split align-right"
              placeholder="Year"
              required
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            /> */}
            <div className="underline"></div>
          </li>
          <li className='flex justify-center items-center gap-4'>
            <select id="semester" className="field-style field-split align-left" required 
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
            <div className="underline"></div>
            {/* <input
              type="number"
              name="field3"
              className="field-style field-split align-left"
              placeholder="Semester"
              required
              value={semester}
              onChange={(e) => {
                setSemester(e.target.value);
              }}
            /> */}
            <input
            type="text"
              name="field4"
              className="field-style field-split align-right -mt-14"
              placeholder="Department"
              required
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            />
            {/* <div className="underline"></div> */}
          </li>
          <li>
            <input
              type="text"
              name="field3"
              className="field-style field-full align-none"
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
              className="field-style"
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