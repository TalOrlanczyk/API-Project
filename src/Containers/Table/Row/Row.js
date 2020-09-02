import React from 'react';
import PropTypes from 'prop-types';
const Row = (props) => {
    return (
        <tr className={props.className}>
            {props.children}
        </tr>
    )
}
Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Row;