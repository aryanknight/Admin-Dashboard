import React from 'react';
import {Paper } from '@material-ui/core';
import Note1 from '../../Images/note1.png';
import Note2 from '../../Images/note2.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Notification({imgcolor}) {
    return (
        <Paper elevation={3} className="notification">
            <img src={imgcolor=="green" ? Note1 : Note2} />
            <div className="notification-text">
                <div style={{color:'#6A707E'}}>New Acquisition Process</div>
                <div className="tracker-para" style={{color:'black'}}>20 Jan 2021, 15:39</div>
            </div>
            <ArrowForwardIosIcon style={{color:'#6A707E'}} />
        </Paper>
    )
}
