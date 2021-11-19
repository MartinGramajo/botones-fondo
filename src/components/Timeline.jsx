import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement 
                contentArrowStyle={{borderRight: '7px solid  rgb(250, 150, 243)' }}
                iconStyle={{background: 'rgb(33, 150, 243)', color: '#04c6ed' }}
            >
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#04c6ed' }}
            >
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}