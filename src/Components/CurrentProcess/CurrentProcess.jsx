import React from 'react';
import {Paper} from '@material-ui/core'; 
import CurrentBox from './CurrentBox';
import './CurrentProcess.css';

export default function CurrentProcess() {
    return (
        <div className="current-process">
            <Paper elevation={3}>
                <div className="header" style={{padding:'16px',borderBottom:'1px solid #a8a8a850',marginBottom:'0px'}} >
                    <div className="title" >Current Processes</div>                    
                </div>
                <div className="current-process-cont" >
                    <CurrentBox color="green-box" no="19" title="Transitions" />
                    <CurrentBox color="orange-box" no="11" title="Mergers" />
                    <CurrentBox color="red-box" no="04" title="Closures" />
                </div>
            </Paper>
        </div>
    )
}
