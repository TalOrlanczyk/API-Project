import React, { useEffect, useState } from 'react';
import { SpaceXNextLaunche } from '../../API/GET/spacex';
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
                return LaunchPad();
            }).then(dataLaunch => {


                const foundTheLaunch = dataLaunch.docs.filter((Launch, index) => {
                    return tempLaunche.id === Launch.id
                });
                let currentDate = new Date();
                let NextLaunch = new Date(foundTheLaunch.date_local);
                if (currentDate < NextLaunch)
                    setUpComingLaunchesData({ ...upComingLaunchesData, Launchpad: { ...foundTheLaunch[0] }, isLoading: false, upComingLaunches: tempLaunche })

                setUpComingLaunchesData({ ...upComingLaunchesData, isLoading: false })

            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <SpaceXLaunchedDetail
            isLoading={upComingLaunchesData.isLoading}
            LaunchData={upComingLaunchesData.Launchpad, upComingLaunchesData.upComingLaunches}
            Launchpad={upComingLaunchesData.Launchpad}
            upComingLaunches={upComingLaunchesData.upComingLaunches} />
    )
}
export default Spacex;