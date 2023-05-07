import React from 'react'
import './serviceCard.css'

const ServiceCard = ({svgIcon, heading}) => {
  return (
    <div className="service-card">
      <div className="service-card-image">
        {svgIcon}
      </div>
      <div className="service-card-content">
        <div className="service-card-heading">
          Co-working space
        </div>
        <div className="service-card-subheading">
          Bring your laptop, and work.
        </div>
      </div>
    </div>
  )
}

export default ServiceCard