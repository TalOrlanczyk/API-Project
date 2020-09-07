import React, { useState, useEffect } from 'react';
import styles from './Title.module.css';
import PropTypes from 'prop-types';
const Title = ({title}) => {
    return (
        <div className={styles.title}>
            <h1 className={styles.ConverterHeader}>{title}</h1>
        </div>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;