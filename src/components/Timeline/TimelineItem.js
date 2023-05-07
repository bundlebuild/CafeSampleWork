import React from 'react'
import './timelineItem.css'
import Transition from '../AnimatedComponents/Transition'

const TimelineItem = ({date, heading}) => {
  return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <Transition>
                <div className="timeline-item-date">
                    {date}
                </div>
            </Transition>
            <Transition>
                <div className="timeline-item-heading">
                    {heading}
                </div>
            </Transition>
        </div>
    </div>
  )
}

export default TimelineItem