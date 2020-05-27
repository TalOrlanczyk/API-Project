import React from 'react';
import './Converter.css';
import CoverterAmount from './CoverterAmount/CoverterAmount';
import CoverterTable from './CoverterTable/CoverterTable';
import useLatestCurrecny from '../customHooks/customeHooks';
import Loading from '../Loading/Loading';
const Converter = () => {
    const [currencyOptions] = useLatestCurrecny();
    const [exchangeRate] = useLatestCurrecny("exchangeRate");
    if (currencyOptions.length === 0)
        return <Loading />
    return (
        <div className="converter-warrper">

            <div className="title">
                <h1 className="Converter-Header">Convert</h1>
            </div>
            <CoverterAmount currencyOptions={currencyOptions} />
            <CoverterTable 
                currencyOptions={currencyOptions} />
        </div>
    )
}
export default Converter