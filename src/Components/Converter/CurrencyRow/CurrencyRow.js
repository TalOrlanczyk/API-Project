import 'date-fns';
import React, { useState, useRef } from 'react';
import styles from './CurrencyRow.module.css'
import useOutsideClick from '../../../customHooks/useOutsideClick';
import ListItems from '../../../Containers/ListItems/ListItems';
import PropTypes from 'prop-types';
const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, compereCurrency }) => {
    console.log('[CurrencyRow.js] rerender')
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => setOpen(!open));

    return (
        <div className={styles.Currecy}>
            <ListItems
                ref = {wrapperRef}
                open={open}
                setOpen={()=> setOpen(!open)} 
                value={selectedCurrency} 
                onChangeCurrency={(option) => onChangeCurrency(option)}>  
                    {currencyOptions
                        .filter(currency => currency !== compereCurrency)
                        .map((option) =>
                            <ListItems.Item key={option} option={option}/>
                        )
                    }
                </ListItems>
            <input type="number" className={styles.moneyConver} value={amount} onChange={onChangeAmount} />
        </div>
    )
}
CurrencyRow.propTypes = {
    currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired, 
    selectedCurrency: PropTypes.string.isRequired,
    onChangeCurrency: PropTypes.func.isRequired,
    onChangeAmount: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired, 
    compereCurrency: PropTypes.string.isRequired,
}
export default CurrencyRow;