import React from 'react';
import styles from './TableHeader.module.css';

const TableHeader = ({headers}) => {
    return (
        <thead className={styles.tableHeader}>
            <tr>
               {headers.map((header,index)=> 
                   <td key={index}>{header}</td>
               )}
            </tr>
        </thead>
    )
}
export default TableHeader;