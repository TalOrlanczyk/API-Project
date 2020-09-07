import React from 'react';
import styles from './LinkButton.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
const style = (theme) => {
      const {backgroundColor,color,size, borderRadius} =  theme || {}
    
    return { 
        backgroundColor: backgroundColor ? backgroundColor: styles.Background,
        color: color ? color : styles.Color,
        size: size ? size : styles.Size,
        borderRadius: borderRadius ? borderRadius : styles.borderRadius,
    };
  };
const LinkButton = ({ to = "", classes, children}) => {
    const theme = style(classes);
    return (
        <div className = {styles.Wrappper}>
            <Link to={to} className={clsx(theme.color,theme.size,theme.backgroundColor,theme.borderRadius)}>
                {children}
            </Link>
        </div>
    )
}
LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    classes: PropTypes.shape({
        backgroundColor:PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.string,
        borderRadius: PropTypes.string,
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default LinkButton;