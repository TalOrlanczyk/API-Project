import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = (props) => {
    return (
        <div className="NotFound">
            <div id="letter-object" className="text-flicker-in-glow anim-object" onClick={(e) => console.log("d")}>404</div>
            <div className="navigation-notfound">

                <button className="prev-page" onClick={(e) => props.history.goBack()}>Back toprevious page</button>
                <div className="back-home">
                    <Link className="link-home" to="/">Back to Home</Link>
                </div>
            </div>
        </div>

    )
}
export default NotFound;