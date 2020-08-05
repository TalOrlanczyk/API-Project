import React from 'react';
import './Logo.css';
import { Link } from "react-router-dom";
import { HexagonHole } from '../../../svg/svgs';

const Logo = () => {

    return (
        <div className="Logo">
            <Link to="/">
                <HexagonHole/>
            </Link>
        </div>
    )
}
export default Logo;
