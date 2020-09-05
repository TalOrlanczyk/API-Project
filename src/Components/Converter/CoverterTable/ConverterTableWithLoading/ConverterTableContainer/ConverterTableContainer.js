import React  from 'react';
import useExchangeByDateAndBase from '../../../../../customHooks/useExchangeByDateAndBase';
import CoverterTable from '../../CoverterTable';
import WithLoading from '../../../../../HoC/WithLoading/WithLoading';
const CoverterTableLoading = WithLoading(CoverterTable)
const ConverterTableContainer = () => {
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


export default ConverterTableContainer;