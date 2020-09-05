import React from 'react';
import styles from './Coin.module.css'
const Coin = () => {
    return (
        <div className={styles.coinFlip}>
            <div className={styles.coinFlipInner}>
                <div className={styles.frontCoin}></div>
                <div className={styles.backCoin}></div>
            </div>
        </div>
    )
}

export default Coin;