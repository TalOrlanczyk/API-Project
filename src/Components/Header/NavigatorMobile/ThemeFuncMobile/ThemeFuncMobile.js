import React, { useState, useEffect } from 'react';
import './ThemeFuncMobile.css';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const ThemeFuncMobile = () => {
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
                
                    <span className="middle">
                        < Brightness4Icon className="ThemeFunc-icon" onClick={(e) => darktheme(e)}/>
                    </span>
                
                :
             
                    <span className="middle">
                        < Brightness7Icon className="ThemeFunc-icon" onClick={(e) => lightmode(e)}/>
                    </span>
                
            }
        </div>
    )
}
export default ThemeFuncMobile;