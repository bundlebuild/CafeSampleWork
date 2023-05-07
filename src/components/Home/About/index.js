import React from 'react'
import './about.css'
import Transition from '../../AnimatedComponents/Transition';

const About = () => {
  return (
    <div className="about-us-container" id="ABOUTUS">
        <div className="about-us-left">
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
                <div className="about-us-content-cta">
                    <div className="btn-outline">
                        See our story
                    </div>
                </div>
                </Transition>
            </div>
        </div>
    </div>
  )
}

export default About