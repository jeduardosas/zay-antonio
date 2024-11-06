import React from 'react'
import data from '../../data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {

  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Itinerario</h3>
      <VerticalTimeline
      lineColor={`${data.time_line.settings.lineColor}`}
      >
        {
          data.time_line.protocol.map(item=>(
            <VerticalTimelineElement
              key=
                {item.id}
              className=
                "vertical-timeline-element--work"
              contentStyle={
                { background: `${data.time_line.settings.bgColor}`,
                  color:`${data.time_line.settings.color}`,
                  marginRight:'10px',
                  boxShadow:'none'}}
              contentArrowStyle={
                { borderRight: `7px solid ${data.time_line.settings.bgColor}`}}
              date=
                {`${item.time}`}
              dateClassName=
                'custom-date-color'
              iconStyle={
                { background: `${data.time_line.settings.bgColor}`, 
                fill: `${data.time_line.settings.bgColor}`,
                boxShadow:`0 0 0 4px ${data.time_line.settings.bgColor}`}} 
              icon={
                <img src={`/icons/${item.icon}.svg`} 
                alt={`ico-${item.icon}`} 
                className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine