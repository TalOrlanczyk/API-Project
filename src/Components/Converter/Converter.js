import React, { useEffect } from 'react';
import styles from './Converter.module.css'
import CoverterAmount from './CoverterAmount/CoverterAmount';
import CoverterTable from './CoverterTable/CoverterTable';
import useLatestCurrecny from '../../customHooks/useLatestCurrecny';
import WithLoading from '../../HoC/WithLoading/WithLoading';
const ConverterMain = ({currencyOptions}) => {
    return (
        <div className={styles.converterWarrper}>
            <div className={styles.title}>
                <h1 className={styles.ConverterHeader}>Convert</h1>
            </div>
            <CoverterAmount 
                currencyOptions={currencyOptions}/>
            <CoverterTable />
        </div>
    )
}
const ConverterData = WithLoading(ConverterMain);
const Converter = () => {
    const [currencyOptions,isLoading] = useLatestCurrecny();
    return (
        <ConverterData
            isLoading={isLoading}
            currencyOptions={currencyOptions}/>
    )
}
export default Converter