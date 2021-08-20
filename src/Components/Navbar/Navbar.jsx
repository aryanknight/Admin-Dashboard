import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Tony from '../../Images/tony.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="input-cont">
                    <div className="input-box">
                        <SearchIcon className="search-icon"/>
                        <input type="text" className="input-field" placeholder="Search..." />
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <Avatar alt="Remy Sharp" src={Tony} style={{width:'60px',height:'60px'}}/>
                <div className="AdminDash" >Admin Dash</div>
                <NotificationsIcon className="AdminDash"  />
            </div>
        </div>
    )
}
