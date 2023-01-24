import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'


function NavBar() {
  return <>
  {/* <div className='container-fluid'>
    <div className='row justify-content-evenly bg-primary '>
      <div className='col'><Link className="nav-link active" aria-current="page" to="/home">Home</Link></div>
      <div className='col'><Link className="nav-link active" aria-current="page" to="/education">Education</Link></div>
      <div className='col'><Link className="nav-link active" aria-current="page" to="/projects">Projects</Link></div>
    </div>

  </div> */}

 <nav className=" row navbar navbar-expand-lg justify-content-evenly bg-info ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className=" navbar-nav" id='navitem '>
      <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
      <Link className="nav-link active" aria-current="page" to="/education">Education</Link>
      <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
      </div>
    </div>
  </div>
</nav> 
 </>
}

export default NavBar;