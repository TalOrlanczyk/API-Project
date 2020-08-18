import React from 'react';
import './MainPage.css';
import CovertLink from './CovertLink/CovertLink';
import PokimonLink from './PokemonLink/PokemonLink';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="MainPage">
            <CovertLink />
            <CovertLink />
            <CovertLink />
            <PokimonLink />
            <div>
                d
                <Link to="/Spotify" />
            </div>
            <CovertLink />
        </div>
    )
}
export default MainPage;