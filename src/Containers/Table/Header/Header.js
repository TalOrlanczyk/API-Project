import React from 'react';
import styles from './Header.module.css'
import PropTypes from 'prop-types';
const Header = ({ headers }) => {
    return (
        <thead className={styles.tableHeader}>
            <tr>
                {headers.map((header, index) =>
                    <td key={index}>{header}</td>
                )}
            </tr>
        </thead>
    )
}
Header.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;