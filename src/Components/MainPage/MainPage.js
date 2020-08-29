import React from 'react';
import './MainPage.css';
import CovertLink from './CovertLink/CovertLink';
import SpaceXLink from './SpaceXLink/SpaceXLink';

const MainPage = () => {
    return (
        <div className="MainPage">
            <CovertLink />
            <SpaceXLink/>
        </div>
    )
}
export default MainPage;