import React, { useEffect, useState } from 'react';
import styles from './Spacex.module.css'
import GoogleMap from './maps/maps';
import CountDownClock from './CountDownClock/CountDownClock';
import { SpaceXNextLaunche } from '../../API/GET/spacex';
import Youtube from './YouTube/Youtube';
import LoadingComp from '../LoadingComp/LoadingComp';
import { LaunchPad } from '../../API/POST/spacexPost';
import Card from '../../Containers/Card/Card';
const Spacex = () => {
    const [open, setOpen] = useState(false);
    const [upComingLaunches, setUpComingLaunches] = useState([]);
    const [Launchpad, setLaunchpad] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        let tempData;
        SpaceXNextLaunche()
            .then(data => {
                setUpComingLaunches(data);
                tempData = data;
                return LaunchPad()
            }).then(dataLaunch => {
                const foundTheLaunch = dataLaunch.docs.filter((Launch, index) => {
                    return tempData.id === Launch.id
                });
                setLaunchpad(foundTheLaunch);
                setIsLoading(false);
            })
    }, [])
    if (isLoading) return <LoadingComp />
    return (
        <div>
            <div className="upcoming-launches">
                <h1 className={styles.title}>upcoming launche</h1>
                <div className={styles.CountDownWarrper}>
                    {Object.keys(upComingLaunches).length > 0 ?
                        <Card className={styles.CountDownCard}>
                            <div className={styles.MissionName}>{upComingLaunches.name}</div>
                            <div className={styles.gridBadges}>
                                <div className={styles.CountDown}><CountDownClock upComingLaunches={upComingLaunches} /></div>
                                <div className={styles.badgeFlex}><img className={styles.badge} src={upComingLaunches.links["patch"]["small"]} alt="mission patch"/></div>
                            </div>
                                <GoogleMap
                                    mapVisiblity={(e) => setOpen(!open)}
                                    open={open}
                                    placeName={Launchpad[0].launchpad.full_name} />
                        </Card>
                        : null}
                </div>
            </div>
            {/* <Youtube youtube_id={'eJO5HU_7_1w'} /> */}
        </div>
    )
}
export default Spacex;