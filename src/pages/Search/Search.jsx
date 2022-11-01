import React from 'react'
import './SearchPage.css'

const Search = () => {
  return (
    <>
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
    </>
  )
}

export default Search