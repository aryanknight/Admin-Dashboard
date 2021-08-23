import React from 'react';
import {Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationBar from './NotificationBar';
import './Notifications.css';

export default function Notifications() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="notifications">
            <Paper elevation={3}>
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
            </Paper>

            <div style={{marginTop:'25px'}}>
                <NotificationBar imgcolor="green" title="New Acquisition Process"/>
                <NotificationBar imgcolor="yellow" title="Completed Form"/>
                <NotificationBar imgcolor="yellow" title="Corrected Form"/>
                <NotificationBar imgcolor="green" title="New Acquisition"/>
                <NotificationBar imgcolor="yellow" title="Completed Form"/>
                <NotificationBar imgcolor="yellow" title="Corrected Form"/>
                <NotificationBar imgcolor="green" title="New Acquisition"/>
            </div>

        </div>
    )
}
