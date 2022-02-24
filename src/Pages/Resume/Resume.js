import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { TimeLnSep1 } from '../../components/Timeline/Timeline';
import './Resume.css'
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import '../../components/Timeline/Timelinef.css'
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import SchoolIcon from '@material-ui/icons/School';
import { Icon } from '@material-ui/core'
import CustomButton from '../../components/Button/Button'


const Resume = () => {
    return (
        <>
            {/* About Me */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30 ">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme_text">{resumeData.about}</Typography>
                </Grid>
            </Grid>





            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30 ">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>



                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>

                            {/* first work experience section   */}

                            <CustomTimeline title={"WorkExperience"} icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem  >
                                        <TimeLnSep1 />

                                        <TimelineContent className="timeline_content">

                                            <Typography className="timeline_title">
                                                {experience.title}
                                            </Typography>

                                            <Typography variant="caption" className="timeline_date">
                                                {experience.date}
                                            </Typography>

                                            <Typography variant="body2" className="timeline_description">
                                                {experience.description}
                                            </Typography>

                                        </TimelineContent>


                                    </TimelineItem>

                                ))}
                            </CustomTimeline>
                        </Grid>





                        {/* Eduction */}
                        <Grid item sm={12} md={6}>

                            <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                                {resumeData.educations.map((education) => (
                                    <TimelineItem  >
                                        <TimeLnSep1 />

                                        <TimelineContent className="timeline_content">

                                            <Typography className="timeline_title">
                                                {education.title}
                                            </Typography>

                                            <Typography variant="caption" className="timeline_date">
                                                {education.date}
                                            </Typography>

                                            <Typography variant="body2" className="timeline_description">
                                                {education.description}
                                            </Typography>

                                        </TimelineContent>


                                    </TimelineItem>

                                ))}
                            </CustomTimeline>


                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            {/* Services */}
            <Grid container className=" section pb_45">
                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text"> My services</h6>

                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <div className="service">
                                    <Icon className="service_icon">{service.icon}</Icon>
                                    <Typography className="service_title" variant="h6">{service.title}</Typography>
                                    <Typography className="service_description" variant="body2">{service.description}</Typography>

                                </div>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>


            {/* Skills */}
            <Grid container className="section graybg pb_45 p_50" >

                <Grid item className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text"> Skills</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container justify="space-between" spacing={3}>
                        {resumeData.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={1} className="skill">
                                    <Typography variant="h6" className="skill_title">
                                        {skill.title}
                                    </Typography>
                                    {skill.description.map((element) => (
                                        <Typography variant="body2" className="skill_description">
                                            <TimelineDot variant={'outlined'} className={'timeline_dot'} />{element}</Typography>
                                    ))}

                                </Paper>
                            </Grid>

                        ))}

                    </Grid>

                </Grid>



            </Grid>


            {/* Contact info*/}
            <Grid container spacing={5} className="section pt_45 pb_45">
                <Grid item xs={12} lg={7}>
                    <Grid container >
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text"> Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label='Name' />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label='E-mail' />
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField fullWidth name='message' label='message' multiline rows={4} />
                                </Grid>

                                <Grid item xs={12}>
                                    <CustomButton text1='submit' />
                                </Grid>


                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text"> Contact information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Address:</span>{resumeData.address}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Phone:</span>{resumeData.phone}
                                        xs={12}
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography className='contactinfo_item'>
                                        <span>Email:</span>{resumeData.email}
                                    </Typography>
                                </Grid>



                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container className='contactInfo_socialsContainer'>
                                {Object.keys(resumeData.socials).map((key) => (
                                    <Grid item className='contactInfo_social'>
                                        <a href={resumeData.socials[key].link}>
                                            {resumeData.socials[key].icon}
                                        </a>
                                    </Grid>
                                ))}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>




    );
};

export default Resume
