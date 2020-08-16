import React from 'react';
import './Converter.css';
import CoverterAmount from './CoverterAmount/CoverterAmount';
import CoverterTable from './CoverterTable/CoverterTable';
import useLatestCurrecny from '../customHooks/customeHooks';
import Loading from '../Loading/Loading';
const Converter = () => {
    const [currencyOptions,exchangeRate,isLoading,setExchange] = useLatestCurrecny();
    if (isLoading)
        return <Loading />
    return (
        <div className="converter-warrper">
            <div className="title">
                <h1 className="Converter-Header">Convert</h1>
            </div>
            <CoverterAmount 
                currencyOptions={currencyOptions}
                exchangeRate={exchangeRate}
                setExchangeRate={(exchange)=>setExchange(exchange)}/>
            <CoverterTable 
                currencyOptions={currencyOptions} />
        </div>
    )
}
export default Converter