import React, { useEffect, useState } from 'react';
import styles from './CoverterTable.module.css'
import Loading from '../../Loading/Loading';
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';
import { ExchangeByDateAndBase } from '../../../API/GET/exchange';
import { calcMonth } from '../../../functions/functions';
const CoverterTableContainer = ({ data: { selectedDate, isHaveError, CurreciesRates }, func: { handleDateChange: (e) => { handleDateChange(e) }, setIsHaveError: () => { setIsHaveError(false) } } }) => {
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