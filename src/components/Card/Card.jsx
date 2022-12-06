import React from 'react'
import './card.css'
import {motion} from 'framer-motion'

const Card = (props) => {

  console.log(props)

  return (
    <div className='w-full'>
      <motion.div className='flex flex-col justify-content cursor-pointer items-center p-10 text-yellowtheme border-white border-2 file-card max-content flex-wrap text-2xl'
      initial={{opacity:0,translateX:-200}}
      // animate={{opacity:1,translateX:0}}
           whileInView={{
      opacity:1,
      translateX:0
     }}
      transition={{
        ease:'easeInOut',
        duration:0.3,
        delay:(props.indval) * 0.05,
        type:'spring',
        stiffness:200
      }}
      >
        <div>
          <motion.img src="https://s.smallpdf.com/static/6af3229ddbcb95e214a25a8e90515e74.svg" alt=""
          whileHover={{
            scale:1.1,
            transition: {
              ease: 'easeOut',
              duration: 0.5
            }
          }}
          />
        </div>
        <h1 className='text-5xl'>{props.filedata.Institute}</h1>
        <h2>{props.filedata.Department}</h2>
        <h3>{props.filedata.Year}</h3>
        <h3>{props.filedata.Semester}</h3>
      </motion.div>
    </div>
  )
}

export default Card