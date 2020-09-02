import React from 'react';
import styles from './Table.module.css'
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Body from './Body/Body';
import Row from './Row/Row';
import Data from './Data/Data';
const Table = (props) => {
    return (
        <table className={styles.tableCovertor}>
            {props.children}
        </table>
    )
}
Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Data = Data
export default Table;