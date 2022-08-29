import React from "react"
import classes from "./portfolio.module.scss"

export default function NavLink({name}){
    return(
        <p className={classes.links}>
            {name}
        </p>
    )
}