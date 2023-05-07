import React from 'react'
import './timeline.css'
import TimelineItem from './TimelineItem'

const Timeline = () => {
    const timelineData = [
        {
            'date': 2013,
            'heading': 'Cats invited, doors opened',
        },
        {
            'date': 2015,
            'heading': 'In-House Coffee',
        },
        {
            'date': 2017,
            'heading': 'Co-Working Opening',
        },
        {
            'date': 2020,
            'heading': 'Home Deliveries',
        },
        {
            'date': 2023,
            'heading': 'Venue Offerings',
        },
    ]
  return (
    <div className="timeline-container" id="TIMELINE">
        <div className="timeline-heading">
            Our Timeline
        </div>
        <div className="timeline-scrollable-animation">
            {timelineData.map((y) => {
                return (
                    <TimelineItem date={y.date} heading={y.heading}/>
                )
            })}
        </div>
        <div className="timeline-footer-cta">
            <div className="btn btn-outline">
                See our full timeline
            </div>
        </div>
    </div>
  )
}

export default Timeline