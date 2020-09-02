import React from 'react';
import styles from './CoverterTable.module.css'
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';

const CoverterTable = ({ data: { selectedDate, isHaveError, CurreciesRates }, handlers: { handleDateChange, setIsHaveError } }) => {
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

export default CoverterTable;