import React, { useState, useEffect } from 'react';
import './CurrentTime.css'
import moment from 'moment'

const CurrentTime = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            let currentTimer = new Date();
            setCurrentDate(moment().format('L'));
            setCurrentTime(moment(currentTimer).format('HH:mm:ss'))
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="TimeAndData">
            <span className="CurrentTime">{currentTime}</span>
            <span className="CurrentDate">{currentDate}</span>
        </div>
    )
}
export default CurrentTime;