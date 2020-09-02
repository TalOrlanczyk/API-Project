import React from 'react';
import PropTypes from 'prop-types';
const Data = (props) => {
    return (
        <td className={props.className} colSpan={props.colSpan}>
            {props.children}
        </td>
    )
}
Data.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Data;