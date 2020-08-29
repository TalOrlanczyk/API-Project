import React, { useState, useEffect } from 'react';
import './ThemeFunc.css';
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
        <div className="ThemeFunc-flex">
            {!isDarkMode ?
                <Fab className="fab-class" aria-label="Center Align" onClick={() => ChangeTheme()}>
                    <span className="middle" aria-hidden="true">
                        < Brightness4Icon className="ThemeFunc-icon" />
                    </span>
                </Fab>
                :
                <Fab className="fab-class" aria-label="Center Align" onClick={() => ChangeTheme()}>
                    <span className="middle" aria-hidden="true">
                        < Brightness7Icon className="ThemeFunc-icon" />
                    </span>
                </Fab>
            }
        </div>
    )
}
const ThemeFuncStorage = WithStorage(ThemeFunc);
export default ThemeFuncStorage;