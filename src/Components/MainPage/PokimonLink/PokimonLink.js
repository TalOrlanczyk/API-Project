import React from 'react';
import './PokimonLink.css';
import { Link } from 'react-router-dom';

const PokimonLink = () => {
    return (
        <div className="poxedex">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>

            <div className="converter-link-padd">
                <Link to="/Converter" className="poxedex-link">

                    Poxedec
                </Link>
            </div>
        </div>
    )
}
export default PokimonLink;