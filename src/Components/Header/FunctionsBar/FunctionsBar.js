import React from 'react';
import styles from './FunctionsBar.module.css';
import ThemeFunc from './ThemeFunc/ThemeFunc';
import ConverterLink from './ConverterLink/ConverterLink';


const FunctionsBar = () => {
    console.log("func")
    return (
        <div className={styles.funcBarGrid}>
            <ThemeFunc/>
            <ConverterLink/>
        </div>
    )
}
export default FunctionsBar;