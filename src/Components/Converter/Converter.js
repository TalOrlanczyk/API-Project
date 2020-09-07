import React from 'react';
import styles from './Converter.module.css'
import useLatestCurrecny from '../../customHooks/useLatestCurrecny';
import WithLoading from '../../HoC/WithLoading/WithLoading';
import ConverterTableContainer from './CoverterTable/ConverterTableWithLoading/ConverterTableContainer/ConverterTableContainer';
import ConverterAmountContainer from './ConverterAmount/ConverterAmountContainer/ConverterAmountContainer';
import Title from '../../Containers/Title/Title';
const ConverterLatestData = WithLoading(ConverterAmountContainer);
const Converter = () => {
    const [currencyOptions,isLoading] = useLatestCurrecny();
    return (
        <div className={styles.converterWarrper}>
            <Title title="converter"/>
            <ConverterLatestData
                isLoading={isLoading}
                currencyOptions={currencyOptions}/>
            <ConverterTableContainer/>
        </div>
    )
}
export default Converter