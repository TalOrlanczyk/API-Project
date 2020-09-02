import React from 'react';
import styles from './Card.module.css'
import PropTypes from 'prop-types';
const Card = (props) => {
    return (
        <div className={[styles.Card, props.className].join(" ")}>
            {props.children}
        </div>
    )
}
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Card;