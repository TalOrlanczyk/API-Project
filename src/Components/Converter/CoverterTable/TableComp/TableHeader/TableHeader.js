import React from 'react';
import './TableHeader.css';

const TableHeader = ({headers}) => {
    return (
        <thead className="tableHeader">
            <tr>
               {headers.map((header,index)=> 
                   <td key={index}>{header}</td>
               )}
            </tr>
        </thead>
    )
}
export default TableHeader;