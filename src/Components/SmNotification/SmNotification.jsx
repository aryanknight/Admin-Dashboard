import React from 'react';
import './SmNotification.css';
import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pagination from '../Pagination/Pagination';
import Notification from './Notification';

export default function SmNotification() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="sm-notification">
            <Paper elevation={3} >
                <div className="header">
                    <div className="title">Notifications</div>
                    <div className="progress-right">

                        <div>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Sort By <ExpandMoreIcon/>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Date of Activity</MenuItem>
                                <MenuItem onClick={handleClose}>Name of Activity</MenuItem>
                                <MenuItem onClick={handleClose}>Place</MenuItem>
                            </Menu>
                        </div>

                    </div>
                </div>
                <Notification imgcolor="green" title="New Acquisition Process"/>
                <Notification imgcolor="yellow" title="Completed Form"/>
                <Notification imgcolor="yellow" title="Corrected Form"/>
                <Notification imgcolor="green" title="New Acquisition"/>

                <Pagination/>
            </Paper>    
        </div>
    )
}
