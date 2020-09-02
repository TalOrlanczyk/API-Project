import React from 'react';
import styles from './Body.module.css'
import PropTypes from 'prop-types';
const Body = (props) => {
    return (
        <tbody className={styles.tableBody}>
            {props.children}
        </tbody>
    )
}
Body.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Body;