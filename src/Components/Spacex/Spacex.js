import React, { useEffect, useState } from 'react';
import styles from './Spacex.module.css'
import { SpaceXNextLaunche } from '../../API/GET/spacex';
import LoadingComp from '../LoadingComp/LoadingComp';
import { LaunchPad } from '../../API/POST/spacexPost';
import LauncheDetail from './LauncheDetail/LauncheDetail';
const Spacex = () => {
    const [upComingLaunches, setUpComingLaunches] = useState({});
    const [Launchpad, setLaunchpad] = useState({})
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
                setLaunchpad({...foundTheLaunch[0]});
                setIsLoading(false);
            })
    }, [])
    if (isLoading) return <LoadingComp />
    return (
        <LauncheDetail Launchpad={Launchpad} upComingLaunches={upComingLaunches}/>
    )
}
export default Spacex;