import React from 'react';
import styles from './LinkButtonWrapper.module.css'
import PropTypes from 'prop-types';
const LinkButtonWrapper = ({className,...props}) => {
    return (
        <div className={className ? className : styles.Wrapper}>
            {props.children}
        </div>
    )
}
LinkButtonWrapper.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default LinkButtonWrapper;