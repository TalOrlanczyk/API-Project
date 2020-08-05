import React, { useState, useEffect } from 'react';
import './ThemeFunc.css';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const ThemeFunc = () => {
    const [theme, setTheme] = useState("");
    useEffect(()=> {
        var ca = document.cookie.split(';');
        ca = ca[0].split('=');
        const element = document.getElementById("API");
        if (ca[0] === "theme") {

            element.classList.add(ca[1]);
            setTheme(ca[1])
        } else {
            element.classList.add("lightmode");
            setTheme("lightmode")
        }

      },[])
    const darktheme = (e) => {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "theme=darkmode" + expires + ";";
        const element = document.getElementById("API");
        element.classList.add("darkmode");
        element.classList.remove("lightmode");
        setTheme("darkmode");
    }
    const lightmode = (e) => {
        const element = document.getElementById("API");
        let date = new Date();
        date.setDate(date.getDate() + 1);
        let expires = "; expires=" + date.toUTCString();
        document.cookie = "theme=lightmode" + expires + ";";
        element.classList.add("lightmode");
        element.classList.remove("darkmode");
        setTheme("lightmode");
    }
    return (
        <div className="ThemeFunc-flex">
            {theme === "lightmode" ?
                <button className="fab-class" aria-label="Center Align" onClick={(e) => darktheme(e)}>
                    <span className="middle" aria-hidden="true">
                        < Brightness4Icon className="ThemeFunc-icon" />
                    </span>
                </button>
                :
                <button className="fab-class" aria-label="Center Align" onClick={(e) => lightmode(e)}>
                    <span className="middle" aria-hidden="true">
                        < Brightness7Icon className="ThemeFunc-icon" />
                    </span>
                </button>
            }
        </div>
    )
}
export default ThemeFunc;