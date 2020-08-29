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
};

export default LinkButtonWrapper;