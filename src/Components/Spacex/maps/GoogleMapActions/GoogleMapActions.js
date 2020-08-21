import React from 'react';
import styles from './GoogleMapActions.module.css'
import { OpenGoogleMaps } from '../MapUtils/MapUtils';
import Room from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import ActionsBar from '../../../../Containers/ActionsBar/ActionsBar';
const GoogleMapActions = ({ open, openMap, MapCoords }) => {
    return (
        <ActionsBar className={styles.gridButton}>

            <button className={styles.OpenInGoogleMap} onClick={() => OpenGoogleMaps(MapCoords.lat, MapCoords.lng, MapCoords.placeId)}>
                <Room className={styles.LocationIcon} /> <span className={styles.LocationIcon}>Open in Google Map</span>
            </button>

            {open ?
                <button className={styles.GoToLocation} onClick={(e) => openMap(e)}>
                    <MapIcon className={styles.LocationIcon} /> <span className={styles.LocationIcon}>Close map</span>
                </button> :
                <button className={styles.GoToLocation} onClick={(e) => openMap(e)}>
                    <MapIcon className={styles.LocationIcon} /> <span className={styles.LocationIcon}>Open map</span>
                </button>
            }


        </ActionsBar>
    )
}
GoogleMapActions.propTypes = {
};

export default GoogleMapActions;