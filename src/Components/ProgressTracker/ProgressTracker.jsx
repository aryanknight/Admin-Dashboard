import React from 'react';
import './ProgressTracker.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tracker from './Tracker.jsx';

export default function ProgressTracker() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='progress-tracker'>
            <Paper elevation={3} >
                <div className="prohress-head">
                    <div className="title">Progress Tracker</div>
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
                
                <Tracker progress="39" />
                <Tracker progress="93" />
                <Tracker progress="51" />
                <Tracker progress="73" />                
                
            </Paper>
        </div>
    )
}
