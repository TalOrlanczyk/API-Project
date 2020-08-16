import React, { useState } from 'react';
import { useInterval } from '../../customHooks/customeHooks';

const CountDownClock = ({ upComingLaunches }) => {
    const [CountDown, setCountDown] = useState("");
    const CountDownLaunches = (launches = upComingLaunches) => {
            let nextLunc = new Date(launches.date_local);
            let launche = Date.parse(nextLunc) - Date.parse(new Date());
            let seconds = Math.floor((launche / 1000) % 60);
            let minutes = Math.floor((launche / 1000 / 60) % 60);
            let hours = Math.floor((launche / (1000 * 60 * 60)) % 24);
            let days = Math.floor(launche / (1000 * 60 * 60 * 24));
            setCountDown("T" + "- " + days + " : " + hours + " : " + minutes + " : " + seconds);
        
    }
    useInterval(() => {
        CountDownLaunches();

    }, 1000);
    return (
        <div className="span-warrper">
            <span className="CountDown-span">{CountDown}</span>
        </div>
    )
}
export default CountDownClock;