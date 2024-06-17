import React from 'react';
import 'boxicons';


const Info = () => {
  return (
<div className="about__info grid">
    <div className="about__box">
    <box-icon name='award' className="about__icons" ></box-icon> 
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year Working</span>

        
    </div>
    <div className="about__box">
    <box-icon name='briefcase-alt' className="about__icons" ></box-icon>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>

        
    </div>
    <div className="about__box">
    <box-icon name='support' className="about__icons" ></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>

        
    </div>
</div>

  )
}

export default Info