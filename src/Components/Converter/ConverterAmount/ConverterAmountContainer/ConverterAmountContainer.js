import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { TodayExchangeRateByBaseAndSymbol } from '../../../../API/GET/exchange';
import WithLoading from '../../../../HoC/WithLoading/WithLoading';
import ConverterAmount from '../ConverterAmount';
const ConverterAmounWithLoading = WithLoading(ConverterAmount)
const ConverterAmountContainer = ({ currencyOptions = [] }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [amountData, setAmountData] = useState({
        exchangeRate: 0,
        toCurrency: currencyOptions[1],
        fromCurrency: currencyOptions[0],
        amount: 1,
        isSwitchedPlaces: false,
        amountInFromCurrency: true
    });
    useEffect(() => {
        if (amountData.fromCurrency && amountData.toCurrency && !amountData.isSwitchedPlaces) {
            TodayExchangeRateByBaseAndSymbol(amountData.fromCurrency, amountData.toCurrency)
                .then(data => {
                    setAmountData({ ...amountData, exchangeRate: data.rates[amountData.toCurrency] });
                    setIsLoading(false);
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountData.fromCurrency, amountData.toCurrency]);
    const handleFromAmountChange = (e) => {
        setAmountData({ ...amountData, amount: e.target.value, amountInFromCurrency: true });
    }

    const handleToAmountChange = (e) => {
        setAmountData({ ...amountData, amount: e.target.value, amountInFromCurrency: false });
    };
    const onSwithcBetweenCurrencies = () => {
        if (!amountData.isSwitchedPlaces)
            setAmountData({ ...amountData, fromCurrency: amountData.toCurrency, toCurrency: amountData.fromCurrency, isSwitchedPlaces: true })
        else
            setAmountData({ ...amountData, fromCurrency: amountData.toCurrency, toCurrency: amountData.fromCurrency, isSwitchedPlaces: false })
    };
    return (
        <ConverterAmounWithLoading
            isLoading={isLoading}
            data={{ amountData, currencyOptions }}
            handlers={{
                handleFromAmountChange: (e) => handleFromAmountChange(e),
                handleToAmountChange: (e) => handleToAmountChange(e),
                onSwithcBetweenCurrencies: () => onSwithcBetweenCurrencies(),
                setAmountData: (data) => setAmountData(data)
            }} />
    )
}
ConverterAmountContainer.propTypes = {
    currencyOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ConverterAmountContainer;