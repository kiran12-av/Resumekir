import React from 'react'
import { Typography } from '@material-ui/core'
import './Profile.css';
import CustomTimeline, { TimeLnSep1 } from '../Timeline/Timeline';
import resumeData from '../../utils/resumeData';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustButton from '../Button/Button'
import GetAppIcon from '@material-ui/icons/GetApp';


export const CustTimeLnSep1 = ({ title, text, link }) => (
    <TimelineItem className="timeline_content" >
        <TimeLnSep1 />
        <TimelineContent  >
                {link ? (
     <Typography className="timelineItem_text">
         <span>{title}:</span>{""}
         <a href={link} target="_blank">
             {text}
         </a>
     </Typography>

 ):(
     <Typography className="timelineItem_text">
         <span>{title}:</span>{text}
     </Typography>
 ) }

        </TimelineContent>
    </TimelineItem>

);



const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>

            <div className='profile_image'>
        <img src='/assets/images/dboss3.jpg' alt="" ></img>
                
            </div>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />} >
                <CustTimeLnSep1 title="Name " text={resumeData.name}/>
                <CustTimeLnSep1 title="Title " text={resumeData.title}/>
                <CustTimeLnSep1 title="Email " text={resumeData.email}/>
                {Object.keys(resumeData.socials).map((key)=>(
                    <CustTimeLnSep1 title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                ))}
                </CustomTimeline>

           
                <div className="btn_container" style={{display:'flex'}}>
                <CustButton text1={'Download CV'} icon={<GetAppIcon/>}/>
                </div>
                
            </div>


        </div>

    )
}

export default Profile
