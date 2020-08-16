import React, { forwardRef } from 'react';
import styles from './GoogleMapComp.module.css';
const GoogleMapComp = forwardRef((props, ref) => {
    return (
        <div className={styles.mapRelative}>

            <div
                id="google-map"
                ref={ref}
                style={{ width: '400px', height: '300px' }}
            />
        </div>
    )
});

export default GoogleMapComp;