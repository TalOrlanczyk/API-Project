import React, { useEffect, useState } from 'react';
import styles from './Spacex.module.css'
import { SpaceXNextLaunche } from '../../API/GET/spacex';
import LoadingComp from '../LoadingComp/LoadingComp';
import { LaunchPad } from '../../API/POST/spacexPost';
import LauncheDetail from './LauncheDetail/LauncheDetail';
import WithLoading from '../../HoC/WithLoading/WithLoading';
const SpaceXLaunchedDetail = WithLoading(LauncheDetail)
const Spacex = () => {
    console.log('[Spacex.js] rerender');
    const [upComingLaunchesData, setUpComingLaunchesData] = useState({
        upComingLaunches: {},
        Launchpad: {},
        isLoading: true
    });
    useEffect(() => {
        let tempLaunche;
        SpaceXNextLaunche()
            .then(data => {
                tempLaunche = data;
                return LaunchPad()
            }).then(dataLaunch => {
                const foundTheLaunch = dataLaunch.docs.filter((Launch, index) => {
                    return tempLaunche.id === Launch.id
                });
                setUpComingLaunchesData({ ...upComingLaunchesData, Launchpad: { ...foundTheLaunch[0] }, isLoading: false, upComingLaunches: tempLaunche })
            })
    }, [])
    return (
        <SpaceXLaunchedDetail
            isLoading={upComingLaunchesData.isLoading}
            Launchpad={upComingLaunchesData.Launchpad}
            upComingLaunches={upComingLaunchesData.upComingLaunches} />
    )
}
export default Spacex;