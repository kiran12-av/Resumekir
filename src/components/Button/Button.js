import React from 'react'
import Button from '@material-ui/core/Button';
import './Button.css'

const CustButton = ({text1,icon}) => {
    return (
        <Button
        className="custom_btn"
        endIcon={icon?<div className="btn_icon_container">{icon}</div>:null}>
<div className="btn_text1">
<span >{text1}</span>
</div>


         
        </Button>
    )
}

export default CustButton
