import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.css';
import Close from '@material-ui/icons/Close';
const ActionBar = ({StartCloseAnimation}) => {
    return (
        <button className={styles.Exit} onClick={() => StartCloseAnimation()}>
            <Close />
        </button>
    )
}
ActionBar.propTypes = {
    StartCloseAnimation: PropTypes.func.isRequired
};

export default ActionBar;