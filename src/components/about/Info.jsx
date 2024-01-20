import React from 'react'


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-award"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 Yrs working</span>
        </div>
         
        <div className="about__box">
        <i class="uil uil-briefcase-alt"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">100 + Projects</span>
        </div>

        <div className="about__box">
        <i class="uil uil-headphones"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 22/7</span>
        </div>

    </div>

  )
}

export default Info