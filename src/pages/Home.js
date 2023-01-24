import React from 'react'
import './Home.css'

function Home() {
  return <>
  <div >
    <div className='home'>
  <h1>Hi,I am SHAMSHATH BEGUM</h1>
  <h3 >A MERN STACK DEVELOPER WITH PASSION FOR LEARNING AND CREATING.</h3>
  <div className='icons'>
  <i className="fas fa-light fa-envelope"></i> &nbsp;&nbsp;&nbsp;
  <i class="fas fa-brands fa-linkedin"></i>&nbsp;&nbsp;&nbsp;
  <i class="fas fa-brands fa-github"></i>
  </div>
  </div>
  <div className='skills'>
    <h1>SKILLS</h1>
    <ol>
        <li className='front-end'>
            <h2>FRONT-END :</h2>
            <span>HTML,CSS,JavaScript,ReactJs,Redux,Bootstrap,ReactBootstrap</span>
       </li>
       <li className='front-end'>
            <h2>BACK-END :</h2>
            <span>MySQL,MongoDB,NodeJS</span>
       </li>
    </ol>
  </div>
</div>
  </>
}

export default Home