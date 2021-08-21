import React from 'react';
import Paper from '@material-ui/core/Paper';
import TeamBox from './TeamBox';
import Pagination from '../Pagination/Pagination';
import './Teams.css';

export default function Teams() {
    return (
        <div className="teams">
            <Paper elevation={3}>
                <div className="header" style={{paddingTop:'16px'}} >
                    <div className="title" >Teams</div>                    
                </div>
                <div className="teams-cont">
                    <TeamBox title="Accounts"/>
                    <TeamBox title="Digital"/>
                    <TeamBox title="Marketing"/>
                    <TeamBox title="Finance"/>
                    <TeamBox title="Team Name"/>
                </div>
                <Pagination/>
            </Paper>
        </div>
    )
}
