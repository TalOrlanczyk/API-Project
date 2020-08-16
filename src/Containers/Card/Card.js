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
};

export default Card;