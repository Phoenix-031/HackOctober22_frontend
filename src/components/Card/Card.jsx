import React from 'react'
import './card.css'

const Card = (props) => {

  console.log(props)
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-content items-center p-10 text-yellowtheme border-white border-2 file-card max-content flex-wrap text-2xl'>
        <div>
          <img src="" alt="" />
        </div>
        <h1 className='text-5xl'>{props.filedata.Institute}</h1>
        <h2>{props.filedata.Department}</h2>
        <h3>{props.filedata.Year}</h3>
        <h3>{props.filedata.Semester}</h3>
      </div>
    </div>
  )
}

export default Card