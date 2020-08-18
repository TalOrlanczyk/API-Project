import React from 'react';
import './Converter.css';
import styles from './Converter.module.css'
import CoverterAmount from './CoverterAmount/CoverterAmount';
import CoverterTable from './CoverterTable/CoverterTable';
import Loading from '../Loading/Loading';
import useLatestCurrecny from '../../customHooks/useLatestCurrecny';
const Converter = () => {
    const [currencyOptions,exchangeRate,isLoading,setExchange] = useLatestCurrecny();
    if (isLoading)
        return <Loading />
    return (
        <div className={styles.converterWarrper}>
            <div className={styles.title}>
                <h1 className={styles.ConverterHeader}>Convert</h1>
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