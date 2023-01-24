import React from 'react'
import ProjectItem from '../components/ProjectItem'
import food_delivery from '../assets/food_delivery.jpg'
import expenceTracker from '../assets/expenceTracker.jpg' 
import e_commerce from '../assets/e_commerce.jpg'
import quiz_image from '../assets/quiz_image.jpg'
import '../pages/Projects.css'


function Projects() {
  return <>
  <div className='projects'>
    <h1>My Personal Projects</h1>
    <div className='projectList'>
<ProjectItem name="Food Delivery App" image={food_delivery}/>
<ProjectItem name="ExpenceTracker" image={expenceTracker}/>
<ProjectItem name="E_Commerce" image={e_commerce}/>
<ProjectItem name="Quiz App" image={quiz_image}/>

      </div>
     </div>
  </>
}

export default Projects