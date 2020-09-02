import React from 'react';
import styles from './Converter.module.css'
import useLatestCurrecny from '../../customHooks/useLatestCurrecny';
import WithLoading from '../../HoC/WithLoading/WithLoading';
import ConverterTableContainer from './CoverterTable/ConverterTableWithLoading/ConverterTableContainer/ConverterTableContainer';
import ConverterAmountContainer from './ConverterAmount/ConverterAmountContainer/ConverterAmountContainer';
const ConverterLatestData = WithLoading(ConverterAmountContainer);
const Converter = () => {
    const [currencyOptions,isLoading] = useLatestCurrecny();
    return (
        <div className={styles.converterWarrper}>
            <div className={styles.title}>
                <h1 className={styles.ConverterHeader}>Convert</h1>
            </div>
            <ConverterLatestData
                isLoading={isLoading}
                currencyOptions={currencyOptions}/>
            <ConverterTableContainer/>
        </div>
    )
}
export default Converter