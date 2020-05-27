import React from 'react';
import Home from '@material-ui/icons/Home';
import './NavigatorMobile.css';
import { Link } from 'react-router-dom';

const NavigatorMobile = () => {
    return (
        <div className="NavigatorMobile-warrper">
            <Link className="home-link" to="/">
                <div className="icon-warrper">
                    <Home className="home-link-icon" />
                </div>
            </Link>
        </div>
    )
}
export default NavigatorMobile;