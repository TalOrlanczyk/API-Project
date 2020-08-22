import React from 'react';
import styles from './GoogleMapActions.module.css'
import { OpenGoogleMaps } from '../MapUtils/MapUtils';
import Room from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import PropTypes from 'prop-types';
import ActionsBar from '../../../../Containers/ActionsBar/ActionsBar';
const GoogleMapActions = ({ open, openMap, MapCoords }) => {
    return (
        <ActionsBar className={styles.gridButton}>

            <button className={styles.OpenInGoogleMap} onClick={() => OpenGoogleMaps(MapCoords.lat, MapCoords.lng, MapCoords.placeId)}>
                <Room className={styles.OpenInGoogleMapIcon} /> <span className={styles.OpenInGoogleMapSpan}>Open in Google Map</span>
            </button>

            {open ?
                <button className={styles.GoToLocation} onClick={(e) => openMap(e)}>
                    <MapIcon className={styles.OpenMapIcon} /> <span className={styles.OpenMapSpan}>Close map</span>
                </button> :
                <button className={styles.GoToLocation} onClick={(e) => openMap(e)}>
                    <MapIcon className={styles.OpenMapIcon} /> <span className={styles.OpenMapSpan}>Open map</span>
                </button>
            }
        </ActionsBar>
    )
}
GoogleMapActions.propTypes = {
    open: PropTypes.bool.isRequired,
    openMap: PropTypes.func.isRequired,
    MapCoords:PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        placeId: PropTypes.string.isRequired,
    })
};

export default GoogleMapActions;