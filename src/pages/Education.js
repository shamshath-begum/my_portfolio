import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return <>
  <VerticalTimeline lineColor='#3e497a'>
    <VerticalTimelineElement 
    className='vertical-timeline-element--education'
    date='1996-2000'
    iconStyle={{background:"#3e497a",color:"#fff"}}
    // <i className="fas-fa-solid fa-graduation-cap"/>
    >
      <h5 className='vertical-timeline-element-title'>
      BE: Jerusalem College Of Engg.,TamilNadu.
      </h5>
     </VerticalTimelineElement>

     <VerticalTimelineElement 
    className='vertical-timeline-element--education'
    date='2000-2001'
    iconStyle={{background:"#3e497a",color:"#fff"}}
    // <i className="fas-fa-solid fa-graduation-cap"/>
    >
      <h5 className='vertical-timeline-element-title'>
    Worked as a Lecturer in Khaja Bande Nawaz College Of Engg.,Karnataka.
      </h5>
   </VerticalTimelineElement>
   <VerticalTimelineElement 
    className='vertical-timeline-element--education'
    date='2000-2001'
    iconStyle={{background:"#3e497a",color:"#fff"}}
    // <i className="fas-fa-solid fa-graduation-cap"/>
    >
      <h5 className='vertical-timeline-element-title'>
    Worked as a Lecturer in Vel Multimedia College Of Engg.,TamilNadu.
      </h5>
   </VerticalTimelineElement>

    <VerticalTimelineElement 
    className='vertical-timeline-element--education'
    date='2002-2004'
    iconStyle={{background:"#3e497a",color:"#fff"}}
    // <i className="fas-fa-solid fa-graduation-cap"/>
    >
      <h5 className='vertical-timeline-element-title'>
      M.Tech(cse):Khaja Bande Nawaz College Of Engg., Karnataka.
      </h5>

    </VerticalTimelineElement>
  </VerticalTimeline>
  </>
}

export default Education