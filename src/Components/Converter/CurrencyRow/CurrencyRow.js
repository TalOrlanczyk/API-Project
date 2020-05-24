import React, { useState, useRef, useEffect } from 'react';
import './CurrencyRow.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const CurrencyRow = (props) => {
    const [open, setOpen] = useState(false);
    const [pickedCoin] = useState("");
    const wrapperRef = useRef(null);
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (open === true)
                        setOpen(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref,open]);
    }
    useOutsideAlerter(wrapperRef);
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount,
        compereCurreny
    } = props

    return (
        <div className="Currecy">
            <div className={open === true ? "color-picker open" : "color-picker"} onClick={(e) => {
                setOpen(!open)
            }} >
                <input id="color-input" type="hidden" name="coloris_panneau" value={pickedCoin} />
                <div className="color-value list-item">{selectedCurrency}<ArrowDownwardIcon className={open === true ? "arrowdown upside" : "arrowdown"} /></div>
                <ul className="list" ref={open === true ? wrapperRef : null} >

                    {currencyOptions
                        .filter(currency => currency !== compereCurreny)
                        .map((option) =>

                            <li key={option} className={selectedCurrency === option ? "list-item picked" : "list-item"} onClick={(e) => onChangeCurrency(option)}>
                                <span>{option}</span>
                            </li>

                        )
                    }
                </ul>
            </div>
            <input type="number" className="money-conver" value={amount} onChange={onChangeAmount} />
        </div>
    )
}
export default CurrencyRow;