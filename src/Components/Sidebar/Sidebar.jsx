import React from 'react';
import Logo from '../../Images/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupIcon from '@material-ui/icons/Group';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FolderIcon from '@material-ui/icons/Folder';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <img src={Logo} id="sidebar-logo" />
                <MenuIcon fontSize="large" style={{color:'white'}}/>
            </div>
            <div className="sidebar-list-1">
                <div className="sidebar-item"> <DashboardIcon className="sidebar-icons"/> Dashboard</div>
                <div className="sidebar-item"> <DonutLargeIcon className="sidebar-icons"/> Processes</div>
                <div className="sidebar-item"> <HomeIcon className="sidebar-icons"/> Practices</div>
                <div className="sidebar-item"> <TimelineIcon className="sidebar-icons"/> Progress Tracker</div>
                <div className="sidebar-item"> <NotificationsIcon className="sidebar-icons"/> Notifications</div>
                <div className="sidebar-item"> <AssignmentIcon className="sidebar-icons"/> Tasks</div>
                <div className="sidebar-item"> <CalendarTodayIcon className="sidebar-icons"/> Calendar</div>
                <div className="sidebar-item"> <GroupIcon className="sidebar-icons"/> Teams</div>
                <div className="sidebar-item"> <ImportContactsIcon className="sidebar-icons"/> Forms</div>
                <div className="sidebar-item"> <FolderIcon className="sidebar-icons"/> Files Archive</div>
            </div>
            <div className="seprator"></div>
            <div className="sidebar-list-1">
                <div className="sidebar-item"> <DashboardIcon className="sidebar-icons"/> Transitions</div>
                <div className="sidebar-item"> <DonutLargeIcon className="sidebar-icons"/> Mergers</div>
                <div className="sidebar-item"> <HomeIcon className="sidebar-icons"/> Closuers</div>
            </div>    
            <div className="seprator"></div>
            <div className="sidebar-list-1">
                <div className="sidebar-item"> <PersonIcon className="sidebar-icons"/> Profile</div>
                <div className="sidebar-item"> <SettingsIcon className="sidebar-icons"/> Settings</div>
                <div className="sidebar-item" style={{marginBottom:'40px'}}> <PowerSettingsNewIcon className="sidebar-icons"/> Logout</div>
            </div>    
        </div>
    )
}
