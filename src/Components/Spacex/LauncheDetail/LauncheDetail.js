import React, { useState } from 'react';
import styles from './LauncheDetail.module.css'
import PropTypes from 'prop-types';
import CountDownClock from '../CountDownClock/CountDownClock';
import Card from '../../../Containers/Card/Card';
import GoogleMap from '../GoogleMap/GoogleMap';
const LauncheDetail = ({ upComingLaunches = {}, Launchpad = {}, LaunchData = {} }) => {
    const [open, setOpen] = useState(false);
    return (
        <div data-test-id="data">
            <div className="upcoming-launches">
                <h1 className={styles.title}>upcoming launche</h1>
                <div className={styles.CountDownWarrper}>
                    {Object.keys(Launchpad).length > 0 ?
                        <Card className={styles.CountDownCard}>
                            <div className={styles.MissionName}>{Launchpad.name}</div>
                            <div className={styles.gridBadges}>
                                <div className={styles.CountDown}><CountDownClock upComingLaunches={Launchpad} /></div>
                                <div className={styles.badgeFlex}><img className={styles.badge} src={Launchpad.links["patch"]["small"]} alt="mission patch" /></div>
                            </div>
                            <GoogleMap
                                mapVisiblity={(e) => setOpen(!open)}
                                open={open}
                                placeName={Launchpad.launchpad.full_name} />
                        </Card>
                        : <h1>no upcoming launches</h1>}
                </div>
            </div>
        </div>
    )
}
LauncheDetail.propTypes = {
    upComingLaunches: PropTypes.object.isRequired,
    Launchpad: PropTypes.object.isRequired,
};

export default LauncheDetail;