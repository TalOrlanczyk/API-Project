import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Search from '@material-ui/icons/Search';
import ErrorSnackbar from '../../../Snackbars/ErrorSnackbar/ErrorSnackbar';
import Event from '@material-ui/icons/Event';
import InputAdornment from '@material-ui/core/InputAdornment';
import './DatePickerCurr.css';


const dateBorderClasses = {
    classes: {
        underline: 'date-border-color',
        input: 'date-input-color',
    },
    endAdornment: (
        <InputAdornment position="end">
            <Event className="event-color" />
        </InputAdornment>
    )
}

const dateLabelClass = {
    classes: {
        root: 'date-label-color',
    },
}
const DatePickerCurr = ({handleStuff}) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    const isGetToTheSearchLimit = () => {
        if ((selectedDate.getFullYear() <= 2011 && selectedDate.getMonth() === 0 && selectedDate.getDate() <= 3))
            return false;
        return true;
    }
    return (
        <>
            <div className="date">

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        disableFuture
                        InputLabelProps={dateLabelClass}

                        InputProps={dateBorderClasses}
                        label="Responsive"
                        views={["year", "month", "date"]}
                        value={selectedDate}
                        onChange={date => handleDateChange(date)}
                        format="dd/MM/yyyy"
                    />
                </MuiPickersUtilsProvider>
                <button className="button-class" disabled={!isGetToTheSearchLimit()} onClick={(e) => handleStuff(e,selectedDate)}>
                    <Search className={isGetToTheSearchLimit() === false ? "disabled" : "date-search"} />
                </button>
            </div>
            {isGetToTheSearchLimit() === false ?
                <ErrorSnackbar
                    text={"cant search data earlier then 04/01/2011"} />
                : null
            }
        </>
    )
}
export default DatePickerCurr;