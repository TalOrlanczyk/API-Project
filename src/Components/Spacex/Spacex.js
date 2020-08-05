import React, { useEffect, useState } from 'react';
import './Spacex.css';
import GoogleMap from './maps/maps';
import CountDownClock from './CountDownClock/CountDownClock';
import { SpaceXUpcomingLaunches } from '../../API/GET/spacex';
import Youtube from './YouTube/Youtube';
import { Link } from 'react-router-dom';
const Spacex = () => {
    const [open, setOpen] = useState(false);
    const [upComingLaunches, setUpComingLaunches] = useState([]);
    useEffect(() => {
        ;
        SpaceXUpcomingLaunches()
            .then(data => {
                setUpComingLaunches(data)
            })
    }, [])
    return (
        <div>

            <div className="upcoming-launches">
                <div className="title">upcoming launches</div>
                <div className="CountDown-warrper">
                    {upComingLaunches.length > 0 ?
                        <div className={open ? 'CountDown-card Large' : 'CountDown-card'}>
                            <div className="grid-badges">
                                <div className="MissionName"><span className="data-of-mission">mission name: {upComingLaunches[0].name}</span></div>
                                <div className="FlightNumber"><span className="data-of-mission">flight number: {upComingLaunches[0]?.flight_number}</span></div>
                                <div className="badge-flex"><img className="badge" src={upComingLaunches[0].links["patch"]["small"]} /></div>
                            </div>
                            <CountDownClock upComingLaunches={upComingLaunches} />
                        For live stream of the launche

                        <a href={upComingLaunches[0].links.webcast} target="_blank">to the live stream of the upcoming mission</a>
                        </div>
                        : null}
                </div>
            </div>
            <Youtube youtube_id={'eJO5HU_7_1w'} />
        </div>
    )
}
export default Spacex;