import React, { useState, useEffect } from 'react';
import styles from './ThemeFunc.module.css'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import WithStorage from '../../../../HoC/withStorage';
import { Fab } from '@material-ui/core';

const ThemeFunc = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "darkmode")
            setIsDarkMode(true);
        else
            setIsDarkMode(false);
    }, [])
    const ChangeTheme = () => {
        const element = document.getElementById("API");
        if (isDarkMode) {
            props.save('theme', '')
            element.classList.add("lightmode");
            element.classList.remove("darkmode");
            setIsDarkMode(false);
        } else {
            props.save('theme', 'darkmode');
            element.classList.add("darkmode");
            element.classList.remove("lightmode");
            setIsDarkMode(true);

        }
    }

    return (
        <div className={styles.ThemeFuncFlex}>
            {!isDarkMode ?
                <Fab className={styles.fabClass} aria-label="Center Align" onClick={() => ChangeTheme()}>
                    <span className={styles.middle} aria-hidden="true">
                        < Brightness4Icon className={styles.ThemeFuncIcon} />
                    </span>
                </Fab>
                :
                <Fab className={styles.fabClass} aria-label="Center Align" onClick={() => ChangeTheme()}>
                    <span className={styles.middle} aria-hidden="true">
                        < Brightness7Icon className={styles.ThemeFuncIcon}  />
                    </span>
                </Fab>
            }
        </div>
    )
}
const ThemeFuncStorage = WithStorage(ThemeFunc);
export default ThemeFuncStorage;