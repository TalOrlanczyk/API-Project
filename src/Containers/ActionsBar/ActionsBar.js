import React from 'react';
import PropTypes from 'prop-types';
const ActionsBar = ({className,...props}) => {
    return (
        <div className={className}> 
            {props.children}
        </div>
    )
}
ActionsBar.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default ActionsBar;