import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Man from '../../Images/man.png';

export default function TeamBox({title}) {
    return (
        <div className="team-box">
            <Avatar style={{height:'50px',width:'50px'}} src={Man}/>
            <div className="team-box-text">
                <div className="team-box-title">{title}</div>
                <div className="team-box-para">Contact</div>
            </div>
        </div>
    )
}
