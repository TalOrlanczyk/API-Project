import React, { useState, useRef } from 'react';
import Home from '@material-ui/icons/Home';
import './NavigatorMobile.css';
import { Link } from 'react-router-dom';
import ThemeFuncMobile from './ThemeFuncMobile/ThemeFuncMobile';
import { SpaceX } from '../../../svg/svgs';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import useOutsideClick from '../../../Utils/useOutsideClick/useOutsideClick';

const NavigatorMobile = () => {
    const [open, setOpen] = useState(false);
    const PopoverRef = useRef(null);
    useOutsideClick(PopoverRef, () => {
        if (open === true)
            setOpen(false)
    });
    return (
        <div className="test">
            <div className="NavigatorMobile-warrper">
                <div className="middle-flex">

                    <Link className="home-link" to="/" >
                        <div className="icon-warrper">
                            <Home className="home-link-icon" />
                        </div>
                    </Link>
                </div>
                <ThemeFuncMobile />
                <div className="middle-flex all-links" onClick={(e) => setOpen(true)}>
                    <AppsRoundedIcon className="home-link" />
                </div>
                {open === true ?
                    <div className="all-apps" ref={open === true ? PopoverRef : null}>
                        <div className="middle-flex" onClick={(e) => setOpen(false)}>
                            <Link to="/SpaceX">

                                <SpaceX />
                            </Link>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}
export default NavigatorMobile;