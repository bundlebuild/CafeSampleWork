import React from 'react'
import './pageHero.css'

const PageHero = () => {
  return (
    <div className="page-hero-container">
        <div className="page-hero-image-overlay"></div>
        <div className="page-hero-image-container">
            {/* <img src="assets/img/cafe_hero.jpg" className="page-hero-image" /> */}
        </div>
        <div className="page-hero-content">
            <div className="page-hero-label">
               <small>in</small> <span className="calm-font">Koramangala</span>
            </div>
            <div className="page-hero-title">
               Where every cup's a<br />fresh start to your<br />day!
            </div>
        </div>
    </div>
  )
}

export default PageHero