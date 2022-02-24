import React from 'react'
import Footer from './Footer.css'
import { Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'


const Footer1 = () => {
    return (
        
<div className="footer">
<div className="footer_left">
<Typography className="footer_name">{resumeData.name}</Typography>
</div>


<div className="footer_right">
<Typography className="footer_copyright">
designed and developed by{" "}
<a href= "/" target="_blank">
    Kirankum
</a>
<br/>
clone idea from 
<a href="https://themeforest.net/item/berlin-modern-portfolio/21158245" target="_blank">
    tavoline</a>

</Typography>
</div>
</div>
 

        )
}

export default Footer1
