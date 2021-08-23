import React,{useEffect} from 'react';
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
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {

    // useEffect(()=>{
    //     var menu=document.getElementsByClassName("sidebar-item");
    //     console.log(menu.length);

    //     function remMenu(){
    //         var menu=document.getElementsByClassName("sidebar-item");
    //         for(var i=0;i<menu.length;i++){
    //             menu[i].classList.remove("sidebar-selected");
    //         }
    //     }

    //     function setMenu(event){
    //         remMenu();
    //         event.target.classList.add("sidebar-selected");
    //     }
    //     for(var i=0;i<menu.length;i++){
    //         console.log('a');
    //         menu[i].addEventListener("click", function(event){setMenu(event)});
    //     }
    // },[])

    return (
        <div className="sidebar">
            <div className="sidebar-head">
                <img src={Logo} id="sidebar-logo" />
                <MenuIcon fontSize="large" style={{color:'white'}}/>
            </div>
            <div className="sidebar-list-1">
                <NavLink to="/"><div className="sidebar-item"><DashboardIcon className="sidebar-icons"/> Dashboard </div></NavLink>
                <NavLink to="/processes"><div className="sidebar-item"> <DonutLargeIcon className="sidebar-icons"/> Processes</div></NavLink>
                <NavLink to="/"><div className="sidebar-item"> <HomeIcon className="sidebar-icons"/> Practices</div></NavLink>
                <NavLink to="/progress-tracker"><div className="sidebar-item"> <TimelineIcon className="sidebar-icons"/> Progress Tracker</div></NavLink>
                <NavLink to="/notifications"><div className="sidebar-item"> <NotificationsIcon className="sidebar-icons"/> Notifications</div></NavLink>
                <NavLink to="/tasks"><div className="sidebar-item"> <AssignmentIcon className="sidebar-icons"/> Tasks</div></NavLink>
                <NavLink to="/"><div className="sidebar-item"> <CalendarTodayIcon className="sidebar-icons"/> Calendar</div></NavLink>
                <NavLink to="/"><div className="sidebar-item"> <GroupIcon className="sidebar-icons"/> Teams</div></NavLink>
                <NavLink to="/"><div className="sidebar-item"> <ImportContactsIcon className="sidebar-icons"/> Forms</div></NavLink>
                <NavLink to="/"><div className="sidebar-item"> <FolderIcon className="sidebar-icons"/> Files Archive</div></NavLink>
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
