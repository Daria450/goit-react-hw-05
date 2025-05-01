import React from 'react';
import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
    return (
        <>
            <h2 className={s.error}>Error occured :(</h2>
        </>
    )
}

export default ErrorMessage