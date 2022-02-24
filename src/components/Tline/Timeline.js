
import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work'

import { Typography } from '@material-ui/core'
import '/Timeline.css'





const CustomTimeline2 = ({ title, icon, children }) => {
    return (

        <Timeline className={"timeline"}>
            {/*Item Header*/}
            <TimelineItem className={"timeline_firstItem"}>
                <TimelineSeparator>
                    <TimelineDot className={"timeline_dot_header"}>
                        {<WorkIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className={"timeline_header"}>
                        {'title'}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {children}



            <TimelineItem>
                <Time1/>
                <TimelineContent>workout</TimelineContent>
            </TimelineItem>


            <TimelineItem>
               <Time1/>
                <TimelineContent>test</TimelineContent>
            </TimelineItem>


        </Timeline>




    )
}

export const Time1 = () => (
    <TimelineSeparator className={"separator_padding"}>
        <TimelineDot className={"timeline_dot"} >
         </TimelineDot>
        <TimelineConnector />
    </TimelineSeparator>

);



export default CustomTimeline2
