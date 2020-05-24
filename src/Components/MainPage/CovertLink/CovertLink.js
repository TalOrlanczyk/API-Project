import React from 'react';
import './CovertLink.css';
import { Link } from 'react-router-dom';

const CovertLink = () => {
    return (
        <div className="convertor">
            <div className="coin-flip">
                <div className="coin-flip-inner">
                    <div className="front-coin"></div>
                    <div className="back-coin"></div>
                </div>
            </div>
            <div className="converter-link-padd">
                <Link to="/Converter" className="converter-link">
                    Convertor
                </Link>
            </div>
        </div>

    )
}
export default CovertLink;