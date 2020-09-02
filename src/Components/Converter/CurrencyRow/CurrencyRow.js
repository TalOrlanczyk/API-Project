import 'date-fns';
import React, { useState, useRef } from 'react';
import styles from './CurrencyRow.module.css'
import useOutsideClick from '../../../Utils/useOutsideClick/useOutsideClick';
import ListItems from '../../../Containers/ListItems/ListItems';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, compereCurreny }) => {
    console.log('[CurrencyRow.js] rerender')
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => {
        if (open)
            setOpen(false)
    });

    return (
        <div className={styles.Currecy}>
            <ListItems open={open} setOpen={()=> setOpen(!open)} value={selectedCurrency} onChangeCurrency={(option) => onChangeCurrency(option)}>
                <ListItems.Picked selectedCurrency={selectedCurrency}></ListItems.Picked>
                <ul className={styles.list} ref={open ? wrapperRef : null} >

                    {open && currencyOptions
                        .filter(currency => currency !== compereCurreny)
                        .map((option) =>
                            <ListItems.Item key={option} option={option}  selectedCurrency={selectedCurrency}  onChangeCurrency={(e) => onChangeCurrency(option)}>
                                <span>{option}</span>
                            </ListItems.Item>
                        )
                    }
                </ul>
                </ListItems>
            <input type="number" className={styles.moneyConver} value={amount} onChange={onChangeAmount} />
        </div>
    )
}
export default CurrencyRow;