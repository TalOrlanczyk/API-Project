import React from 'react';
import styles from './LinkButton.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const LinkButton = ({ to, className, children}) => {
    return (
        <div className = {styles.Wrappper}>
            <Link to={to} className={className ? className : styles.Link}>
                {children}
            </Link>
        </div>
    )
}
LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default LinkButton;