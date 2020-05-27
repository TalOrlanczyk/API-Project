import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
    return (
        <thead className="tableHeader">
            <tr>
                <td>
                    type
            </td>
                <td>
                    rate
            </td>
                <td>
                    daily change
            </td>
                <td>
                    graph
            </td>
            </tr>
        </thead>
    )
}
export default TableHeader;