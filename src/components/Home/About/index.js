import React from 'react'
import './about.css'
import Transition from '../../AnimatedComponents/Transition';

const About = () => {
  return (
    <div className="about-us-container">
        <div className="about-us-left">
            <span>Left Content</span>
        </div>
        <div className="about-us-right">
            <div className="about-us-right-content">
            <Transition>
                <div className="about-us-content-title">
                    About Us
                </div>
                <div className="about-us-content-details">
                    The first Cat Cafe, in <br />Koramangala, started in
                </div>
                <div className="about-us-content-date">
                    <span>2013</span>
                </div>
                </Transition>
            </div>
        </div>
    </div>
  )
}

export default About