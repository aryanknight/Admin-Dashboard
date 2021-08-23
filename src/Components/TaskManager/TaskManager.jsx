import React from 'react';
import Paper from '@material-ui/core/Paper';
import './TaskManager.css';

export default function TaskManager() {
    return (
        <div className="task-manager">
            <Paper elevation={3}>
                <div className="header" style={{paddingTop:'16px',marginBottom:'0px',borderBottom:'1px solid #a8a8a850'}} >
                    <div className="title" >Task Manager</div>                    
                </div>
                <div className="task-btn-cont">
                    <div className="task-btn-cont-1">
                        <button className="task-btn">
                            Create New Task
                        </button>
                    </div>
                    <div className="task-btn-cont-1">
                        <button className="task-btn">
                            Assign Task
                        </button>
                    </div>
                    <div className="task-btn-cont-1">
                        <button className="task-btn">
                            End Task
                        </button>
                    </div>
                    <div className="task-btn-cont-1">
                        <button className="task-btn">
                            Remove Task
                        </button>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
