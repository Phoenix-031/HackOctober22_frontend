import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import './SearchPage.css'

const Search = () => {

  const [fileitems,setFiles] = useState("")

  const populatelocal = () => {
    const files = JSON.parse(localStorage.getItem("files"))
     if(files) {
      setFiles(files.data.files)
     }
    // console.log(files.data.files)
  }

  useEffect(() => {
    populatelocal()
    console.log(fileitems)
    console.log(fileitems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <>
    <div className='topsection'>
      <header className="header-search">
      <nav className="navbar">
        <a href="/" className="nav-logo">QBank</a>
      </nav>
      <div id="search-container">
        <input
          type="search"
          id="search-input"
          placeholder="Search product name here.."
          className=''
        />
        <button id="search">Search</button>
      </div>
    </header>
    <div className="wrapper">
      <div id="buttons">
        <button className="button-value" onclick="filterProduct('all')">All</button>
        <button className="button-value" onclick="filterProduct('Notes')">
          Notes
        </button>
        <button className="button-value" onclick="filterProduct('Study-Material')">
          Study Materials
        </button>
        <button
          className="button-value"
          onclick="filterProduct('Sample-Question-Papers')"
        >
          Sample Question Papers
        </button>
        <button className="button-value" onclick="filterProduct('Cheatsheets')">
          Cheatsheets
        </button>
      </div>
      <div id="products"></div>
    </div>
    </div>
    <div>
      {
        fileitems && fileitems.map((file,index) => (
          <a href = {file.url} target= 'blank'><Card filedata = {file} key = {index}/></a>
        ))
      }
    </div>
    </>
  )
}

export default Search