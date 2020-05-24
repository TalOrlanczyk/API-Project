import React from 'react';
import './FunctionsBar.css';
import ThemeFunc from './ThemeFunc/ThemeFunc';


const FunctionsBar = () => {
    console.log("func")
    return (
        <div className="funcBar-grid">
            <ThemeFunc/>
        </div>
    )
}
export default FunctionsBar;