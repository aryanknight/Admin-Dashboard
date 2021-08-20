import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import ProgressTracker from '../Components/ProgressTracker/ProgressTracker';


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
                        s
                    </div>
                </div>
            </div>
            
        </div>
    )
}
