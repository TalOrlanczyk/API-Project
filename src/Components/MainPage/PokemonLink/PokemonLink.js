import React from 'react';
import './PokemonLink.css';
import { Link } from 'react-router-dom';

const PokemonLink = () => {
    return (
        <div className="poxedex">
                <div className="pokeball">
                    <div className="pokeball__button"></div>
                </div>

            <div className="converter-link-padd">
                <Link to="/Pokemon" className="poxedex-link">

                    Poxedec
                </Link>
            </div>
        </div>
    )
}
export default PokemonLink;