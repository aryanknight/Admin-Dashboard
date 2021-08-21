import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Folder from './Folder';
import './Files.css';

export default function Files() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="files">
            <Paper elevation={3} style={{paddingBottom:'10px'}} >
                <div className="header" style={{borderBottom:'1px solid #a8a8a850'}}>
                    <div className="title">Forms & Files</div>
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

                <div className="folder-cont">
                    <Folder/>
                    <Folder/>
                    <Folder/>
                    <Folder/>
                    <Folder/>
                </div>
            </Paper>
        </div>
    )
}
