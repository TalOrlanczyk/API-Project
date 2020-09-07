import React, { useState, useEffect } from 'react';
import styles from './ConverterLink.module.css'
import Coin from '../../../../Icons/Coin/Coin';
import { Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StackCoins } from '../../../../svg/svgs';
const ConverterLink = (props) => {
    return (
        <div className={styles.ConverterFlex}>
            <Link to='/Converter/'>
                <Fab className={styles.fabClass} aria-label="Center Align">
                    <span className={styles.middle} aria-hidden="true">
                        <StackCoins />
                    </span>
                </Fab>
            </Link>
        </div>
    )
}


export default ConverterLink;