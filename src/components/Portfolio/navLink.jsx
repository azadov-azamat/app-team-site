import React from "react"
import classes from "./portfolio.module.scss"

export default function NavLink({name}){
    return(
        <p data-aos="fade-up" className={classes.links}>
            {name}
        </p>
    )
}