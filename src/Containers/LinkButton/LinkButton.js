import React from 'react';
import styles from './LinkButton.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const style = (theme) => {
      const {backgroundColor,color,size, borderRadius} =  theme || {}
    
    return [
        backgroundColor ? backgroundColor: styles.Background,
        color ? color : styles.Color,
        size ? size : styles.Size,
        borderRadius ? borderRadius : styles.borderRadius,
        styles.Link
    ].join(" ");
  };
const LinkButton = ({ to = "", classes, children}) => {
    const theme = style(classes);
    return (
        <div className = {styles.Wrappper}>
            <Link to={to} className={theme}>
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