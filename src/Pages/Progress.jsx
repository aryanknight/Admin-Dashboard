import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import ProgressTracker from '../Components/ProgressTracker/ProgressTracker';
import Calendar from '../Components/Calendar/Calendar';
import CurrentProcess from '../Components/CurrentProcess/CurrentProcess';


export default function Dashboard() {

    
    return (
        <div className="App">
            <Sidebar/>
            <div className="container">
                <Navbar/>
                <div className="lg-container">
                    <div className="md-container">
                        <ProgressTracker/>
                    </div>
                    <div className="sm-container">
                        <Calendar/>
                        <CurrentProcess/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
