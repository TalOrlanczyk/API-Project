import React, { useEffect, useState } from 'react';
import './Spacex.css';
import GoogleMap from './maps/maps';
import CountDownClock from './CountDownClock/CountDownClock';
const Spacex = () => {
    const [open,setOpen] = useState(false);
    const [upComingLaunches, setUpComingLaunches] = useState([]);
    useEffect(() => {
        ;
        fetch('https://api.spacexdata.com/v3/launches/upcoming')
            .then(res => res.json())
            .then(data => {
                setUpComingLaunches(data)
            })
    }, [])
    // const OpenGoogleMaps = (e) => {
    //     if (navigator.userAgent.match(/webOS/i)
    //         || navigator.userAgent.match(/iPhone/i)
    //         || navigator.userAgent.match(/iPad/i)
    //         || navigator.userAgent.match(/iPod/i)
    //         || navigator.userAgent.match(/BlackBerry/i)
    //         || navigator.userAgent.match(/Windows Phone/i))
    //         window.open("https://maps.google.com/maps/search/?api=1&query=28.626486173436586,-80.62047030219247&query_place_id=ChIJZer0yrO74IgRbTR4IzfGf1s");
    //     else if (navigator.userAgent.match(/Android/i))
    //         window.open(`geo:28.626486173436586,-80.62047030219247?z=3&q=${encodeURIComponent('Kennedy Space Center Launch Complex 39b, Kennedy Space Center, FL, United States')}`);
    //     else
    //         window.open("https://www.google.com/maps/search/?api=1&query=28.626486173436586,-80.62047030219247&query_place_id=ChIJZer0yrO74IgRbTR4IzfGf1s");
    // }
    return (
        <div className="upcoming-launches">
            {/* {upComingLaunches.length > 0 ? 
            <GoogleMap
                placeName={upComingLaunches[0].launch_site.site_name}/>:null} */}
            <div className="title">upcoming launches</div>
            <div className="CountDown-warrper">
                {upComingLaunches.length > 0 ?
                    <div className={open ? 'CountDown-card Large' : 'CountDown-card'}>
                        <div className="grid-badges">
                            <div className="MissionName"><span className="data-of-mission">mission name: {upComingLaunches[0].mission_name}</span></div>
                            <div className="FlightNumber"><span className="data-of-mission">flight number: {upComingLaunches[0]?.flight_number}</span></div>
                            <div className="badge-flex"><img className="badge" src={upComingLaunches[0].links["mission_patch"]} /></div>
                        </div>
                        <CountDownClock upComingLaunches={upComingLaunches} />
                        <GoogleMap
                            openMap={(e)=> setOpen(true)}
                            open={open}
                            placeName={upComingLaunches[0].launch_site.site_name} />
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default Spacex;