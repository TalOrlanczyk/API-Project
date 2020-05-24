import React from 'react';
import './MainPage.css';
import CovertLink from './CovertLink/CovertLink';
import PokimonLink from './PokimonLink/PokimonLink';

const MainPage = () => {
    return (
        <div className="MainPage">
            <CovertLink/>
            <CovertLink/>
            <CovertLink/>
            <PokimonLink/>
            <CovertLink/>
        </div>
    )
}
export default MainPage;