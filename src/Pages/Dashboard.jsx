import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import ProgressTracker from '../Components/ProgressTracker/ProgressTracker';
import Calendar from '../Components/Calendar/Calendar';
import SmNotification from '../Components/SmNotification/SmNotification';
import Tasks from '../Components/Tasks/Tasks'; 
import Files from '../Components/Files/Files';
import Teams from '../Components/Teams/Teams';


export default function Dashboard() {

    
    return (
        <div className="App">
            <Sidebar/>
            <div className="container">
                <Navbar/>
                <div className="lg-container">
                    <div className="md-container">
                        <ProgressTracker/>
                        <Tasks/>
                        <Files/>
                    </div>
                    <div className="sm-container">
                        <Calendar/>
                        <SmNotification/>
                        <Teams/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
