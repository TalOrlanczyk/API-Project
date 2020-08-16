import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionsBar.module.css';
const ActionsBar = ({className,...props}) => {
    return (
        <div className={className}> 
            {props.children}
        </div>
    )
}
ActionsBar.propTypes = {
    className: PropTypes.string.isRequired,
};

export default ActionsBar;