import React from 'react';
import styles from './CoverterTable.module.css'
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';
import useExchangeByDateAndBase from '../../../customHooks/useExchangeByDateAndBase'
import WithLoading from '../../../HoC/WithLoading/WithLoading';

const CoverterTableContainer = ({ data: { selectedDate, isHaveError, CurreciesRates }, handlers: { handleDateChange, setIsHaveError } }) => {
    return (
        <div className={styles.slideInBckCenterTable}>
            <DatePickerCurr
                handleDateChange={(e) => handleDateChange(e)}
                setIsErrorFalse={() => setIsHaveError(false)}
                date={selectedDate}
                isHaveError={isHaveError} />
            <TableComp
                CurreciesRates={CurreciesRates}
                latestRate={CurreciesRates.latestRate}
                yesterdayRate={CurreciesRates.yesterdayRate}
                latestDate={CurreciesRates.latestDate}
                pickedBase={CurreciesRates.pickedBase} />
        </div>
    )
}
const CoverterTableLoading = WithLoading(CoverterTableContainer)
const CoverterTable = () => {
    console.log('[CoverterTable.js] rerenders');
    const [data,handlers] = useExchangeByDateAndBase()
    const handleDateChange = (e) => {
        handlers.setSelectedDate(e);
        handlers.setIsHaveError(false);
    }
    return (
            <CoverterTableLoading
                isLoading={data.CurreciesRates.isLoading}
                data={{ ...data }}
                handlers={{
                    handleDateChange: (e) => handleDateChange(e),
                    setIsHaveError: () => handlers.setIsHaveError(false)
                }}
            />
    )
}

export default CoverterTable;