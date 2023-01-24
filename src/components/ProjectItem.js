import React from 'react'
import { Link } from 'react-router-dom'

function ProjectItem({image,name}) {
  return <>
  <div className='projectItem '>
    <div style={{backgroundImage:`url(${image})`, height:"200px",width:"300px"}} className="bgImage"> </div>
    <Link to='/'>gitup</Link>
    <Link to='/'>Netlify</Link>
      <h1>{name}</h1>
    
  </div>
  </>
}

export default ProjectItem