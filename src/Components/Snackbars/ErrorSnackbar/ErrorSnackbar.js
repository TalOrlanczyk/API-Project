import React from 'react';
import './ErrorSnackbar.css';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

const ErrorSnackbar = ({ text }) => {
    return (
        <div className="error-cant-search-limit">
            <ErrorOutline />
            <div className="error-text">{text}</div>
        </div>
    )
}
export default ErrorSnackbar;