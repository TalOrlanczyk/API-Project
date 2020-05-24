import React from 'react';
import './Converter.css';
import CoverterAmount from './CoverterAmount/CoverterAmount';
import CoverterTable from './CoverterTable/CoverterTable';
const Converter = () => {
    return (
        <div className="converter-warrper">

            <div className="title">
                <h1 className="Converter-Header">Convert</h1>
            </div>
            <CoverterAmount/>
            <CoverterTable/>
        </div>
    )
}
export default Converter