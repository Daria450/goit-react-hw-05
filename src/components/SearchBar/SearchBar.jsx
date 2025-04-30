import React from 'react'
import { IoIosSearch } from "react-icons/io";
import s from "./SearchBar.module.css"
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = (values, options) => {
        handleChangeQuery(values.query);
        if (!values.query.trim()) {
            toast.error("The field cannot be empty");
        };
        options.resetForm();
    }


    return (
        <header >
            <Toaster />
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form className={s.form}>
                    <label className={s.label} htmlFor="query">

                        <Field className={s.input} type="text" name="query" placeholder='Search movies'
                        />
                        <button className={s.button} type='submit'><IoIosSearch /></button>
                    </label>
                </Form>
            </Formik>

        </header>
    )
}