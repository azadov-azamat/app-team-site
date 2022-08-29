import React from 'react'
import classes from "./name.module.scss"

export default function Contextname({text}) {

    return (
        <div className={classes.wrapper}>
            <p data-aos="fade-right">{text}</p>
            <h1>{text}</h1>
        </div>
    )
}