import React from 'react';
import './Header.css'
import Title from './Title/Title.js';
import Logo from './Logo/Logo';
import FunctionsBar from './FunctionsBar/FunctionsBar';
const Header = () => {
    return (
        <div className="Header-grid">  
            <Logo/>
            <Title/>
            <FunctionsBar/>
        </div>
    )
}
export default Header;