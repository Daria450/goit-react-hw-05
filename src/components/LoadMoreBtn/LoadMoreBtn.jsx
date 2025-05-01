import React from 'react'
import s from "./LoadMoreBtn.module.css"


export const LoadMoreBtn = ({ handleChangePage }) => {
    return (
        <>
            <button onClick={handleChangePage} className={s.button}>Load more</button>
        </>
    )
}
