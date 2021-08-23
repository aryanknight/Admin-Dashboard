import React ,{useEffect}from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Navbar from '../Components/Navbar/Navbar';
import Calendar from '../Components/Calendar/Calendar';
import Teams from '../Components/Teams/Teams';
import Tasks from '../Components/Tasks/Tasks'; 
import TaskManager from '../Components/TaskManager/TaskManager';

export default function TasksPage() {
    
    useEffect(()=>{
        var menu=document.getElementsByClassName("sidebar-item");
        for(var i=0;i<menu.length;i++){
            if(i!=5){
                menu[i].classList.remove("sidebar-selected");
            }else{
                menu[i].classList.add("sidebar-selected");
            }
        }
    },[]);

    return (
        <div className="App">
            <Sidebar/>
            <div className="container">
                <Navbar/>
                <div className="lg-container">
                    <div className="md-container">
                        <Tasks/>
                    </div>
                    <div className="sm-container">
                        <TaskManager/>
                        <Calendar/>
                        <Teams/>
                    </div>
                </div>
            </div>
        </div>
    )
}
