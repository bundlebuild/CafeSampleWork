import React from 'react'
import './ourLocations.css';  
import Transition from '../AnimatedComponents/Transition';
import OurLocationItem from './OurLocationItem';

const OurLocations = () => {
  const locationData = [
    {
      'locationHeading': 'Koramangala',
      'locationAddress': 'Some where interesting, Koramangala, Bengaluru'
    },
    {
      'locationHeading': 'HSR',
      'locationAddress': 'Some where interesting, HSR, Bengaluru'
    },
    {
      'locationHeading': 'Electronic City',
      'locationAddress': 'Some where interesting, Electronic City, Bengaluru'
    },
    {
      'locationHeading': 'Whitefield',
      'locationAddress': 'Some where interesting, Whitefield, Bengaluru'
    },
  ]
  return (
    <div className="our-locations-section" id="OURLOCATIONS">
      <Transition className="our-locations-container">
        <div className="our-locations-icon">
        </div>
        <div className="our-locations-heading">
          We wanna meet you!
        </div>
        <div className="our-locations-subheading">
          If your in <span className="calm-font">Bangalore</span>, we're <span className="calm-font">everywhere</span>.
        </div>
      </Transition>
      <Transition className="our-locations-items">
        {locationData.map((y) => {
          return <OurLocationItem locationHeading={y.locationHeading} locationAddress={y.locationAddress} />
        })}
      </Transition>
    </div>
  )
}

export default OurLocations
