import 'date-fns';
import React, { useState, useRef } from 'react';
import './CurrencyRow.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useOutsideClick from '../../../Utils/useOutsideClick/useOutsideClick';
import ListItems from '../../../Containers/ListItems/ListItems';
import ListItem from '../../../Containers/ListItem/ListItem';

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount, compereCurreny }) => {
    const [open, setOpen] = useState(false);
    const [pickedCoin] = useState("");
    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => {
        if (open === true)
            setOpen(false)
    });
    return (
        <div className="Currecy">
            <ListItems open={open} setOpen={(e)=>setOpen(!open)}>
                <input id="color-input" type="hidden" name="coloris_panneau" value={pickedCoin} />
                <div className="color-value list-item">{selectedCurrency}<ArrowDownwardIcon className={open === true ? "arrowdown upside" : "arrowdown"} /></div>
                <ul className="list" ref={open === true ? wrapperRef : null} >
                    {currencyOptions
                        .filter(currency => currency !== compereCurreny)
                        .map((option) =>
                            <ListItem key={option} option={option}  selectedCurrency={selectedCurrency}  onChangeCurrency={(e) => onChangeCurrency(option)}>
                                <span>{option}</span>
                            </ListItem>
                        )
                    }
                </ul>
                </ListItems>
            <input type="number" className="money-conver" value={amount} onChange={onChangeAmount} />
        </div>
    )
}
export default CurrencyRow;