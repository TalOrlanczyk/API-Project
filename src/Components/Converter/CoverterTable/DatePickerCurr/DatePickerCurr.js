import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Search from '@material-ui/icons/Search';

import Event from '@material-ui/icons/Event';
import Alert from '@material-ui/lab/Alert';
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
const DatePickerCurr = ({handleDateChange,date,isHaveError, setIsErrorFalse}) => {
    const [selectedDate, setSelectedDate] = useState(new Date(date));
    const onChangeValue = (date) => {
        setSelectedDate(date)
        setIsErrorFalse()
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
                        onChange={date => onChangeValue(date)}
                        format="dd/MM/yyyy"
                    />
                </MuiPickersUtilsProvider>
                <button className="button-class"  onClick={(e) => handleDateChange(selectedDate)}>
                    <Search className={isHaveError ? "disabled" : "date-search"} />
                </button>
            </div>
            {isHaveError ?
                <Alert
                    severity="error"
                    className="ControlColorError" >Try to enter a new date that is above the date entered</Alert>
                : null
            }
        </>
    )
}
export default DatePickerCurr;