import React from 'react';
import { Paper } from '@material-ui/core';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import './Calendar.css';

export default function Calendars() {
    return (
        <div className="calendar">
            <Paper elevation={3}>
                <Calendar className="arc" />
            </Paper>
        </div>
    )
}
