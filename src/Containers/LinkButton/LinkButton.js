import React, { useState, useEffect } from 'react';
import styles from './LinkButton.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const LinkButton = ({ to, className, children, ...props }) => {
    return (
        <div className = {styles.Wrappper}>
            <Link to={to} className={className ? className : styles.Link}>
                {children}
            </Link>
        </div>
    )
}
LinkButton.propTypes = {
};

export default LinkButton;