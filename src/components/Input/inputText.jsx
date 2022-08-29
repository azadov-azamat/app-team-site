import React from 'react'
import classes from "./input.module.scss"
import {useTranslation} from "react-i18next"
import InputMask from "react-input-mask"

export default function InputText(props) {
    const {label, name} = props
    const {t} = useTranslation()

    return (
        <div className={classes['input-group']}>
            <input
                id="name"
                name={name}
                type={"text"}
                required
                className={classes.input}
            />
            <label htmlFor="name" className={classes['input-label']}>{t(label)}</label>
        </div>
    )
}