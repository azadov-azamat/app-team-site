import React, {useEffect, useState} from 'react'
import classes from "./scrollUp.module.scss"
import {BsFillArrowUpSquareFill} from "react-icons/all.js"

export default function ScrollUp() {

    const [position, setPosition] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    },[])

   const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        setPosition(winScroll)
    }

    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className={position !== 0 ? classes.wrapper : 'hidden'}>
            <BsFillArrowUpSquareFill fontSize={40} onClick={scroll} id={'scroll'}/>
            <div className="output"></div>
        </div>
    )
}