import React from 'react'
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import { fileUpload } from '../../api/api.file';

const UpoadFile = () => {

  const [insname,setInsname] = useState("");
  const [year,setYear] = useState("");
  const [semester,setSemester] = useState("");
  const [department,setDepartment] = useState("");
  const [subject,setSubject] = useState("");
  const [file,setFile] = useState("")
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const contributor = "debayan"
    // console.log(file)

    const res = await fileUpload(contributor,insname,year,semester,department,file)
    // console.log(res)
    if(res.data.success){
      setInsname("")
      setYear("")
      setDepartment("")
      setSubject("")
      setSemester("")
      setFile("")

      navigate('/')
    }
    
  }

  const handleupload = (e) => {

    const File = e.target.files[0]
    console.log(File)
    
    const render = new FileReader()
    render.readAsDataURL(File)
    render.onload = (e) => {
      setFile(render.result)
    }
    console.log(file)
  }
  
  return (
    <>
    <header className="header">
      <nav className="navbar">
        <a href="/" className="nav-logo">Upload Files</a>
      </nav>
    </header>
    <div className="container">
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
            <input
              type="number"
              name="field2"
              className="field-style field-split align-right"
              placeholder="Year"
              required
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <div className="underline"></div>
          </li>
          <li>
            <input
              type="number"
              name="field3"
              className="field-style field-split align-left"
              placeholder="Semester"
              required
              value={semester}
              onChange={(e) => {
                setSemester(e.target.value);
              }}
            />
            <div className="underline"></div>
            <input
            type="text"
              name="field4"
              className="field-style field-split align-right"
              placeholder="Department"
              required
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            />
            <div className="underline"></div>
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
            {/* <div className="underline"></div> */}
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      <div className="drag-area">
        <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button>Browse File</button>
        <input 
        type="file" 
        name="fileupload"
        onChange={handleupload}
         />
      </div>
      </form>
      {/* <div className="drag-area">
        <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
        <header>Drag & Drop to Upload File</header>
        <span>OR</span>
        <button>Browse File</button>
        <input type="file" hidden />
      </div> */}
    </div>
    </>
  )
}

export default UpoadFile