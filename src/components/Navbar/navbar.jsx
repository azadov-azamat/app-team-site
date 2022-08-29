import React, {useEffect, useState} from 'react'
import classes from "./navbar.module.scss"
import logo from "../../assets/png/logo-name.png"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";
import {defaultRoute} from "../../utils/constants.js";

export default function Navbar() {

    const {t, i18n} = useTranslation()
    const {language} = i18n

    const [position, setPosition] = useState(0)
    const [active, setActive] = useState(false)
    const toggle = () => setActive(!active)

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

    const links = [
        {id: 1, name: 'услуги', href: '#service'},
        {id: 2, name: 'портфолио', href: '#portfolio'},
        {id: 3, name: 'контакты', href: '#contact'}
    ]

    const languages = [
        {
            value: "uz",
            name: 'UZ',
        },
        {
            value: "ru",
            name: 'RU',
        },
        {
            value: "en",
            name: 'EN',
        }
    ]

    return (
        <nav className={classes.wrapper}>
            <Link to={defaultRoute} className={classes.logo}>
                <img src={logo} alt="logo-system"/>
            </Link>
            <div className={classes.links}>
                <ul>
                    {links.map(link => <li key={link.id}><a href={link.href} >{t(link.name)}</a></li>)}
                </ul>
            </div>
            <div className={classes.setting}>
                <div className={classes.lang}>
                    {languages.map(lang => <button key={lang.value}
                                                   className={language === lang.value ? classes.active : ''}
                                                   onClick={() => i18n.changeLanguage(lang.value)}>{lang.name}</button>)}
                </div>
            </div>

            <div className={position !== 0 ? classes.toggle + " fixed flex justify-center items-center" +
                " w-14 h-14 rounded-full top-[15px] bg-primary_black right-1 z-50" : classes.toggle}>
                <input className={classes.checkbox} type="checkbox" name="" id=""/>
                <div className={classes['hamburger-lines']}>
                    <span className={classes.line1}></span>
                    <span className={classes.line2}></span>
                    <span className={classes.line3}></span>
                </div>
                <div className={classes.menu}>
                    <ul>
                        {links.map(link => <li key={link.id}><a href={link.href}>{t(link.name)}</a></li>)}
                    </ul>
                    <div className={classes.lang}>
                        {languages.map(lang => <button key={lang.value}
                                                       className={language === lang.value ? classes.active : ''}
                                                       onClick={() => i18n.changeLanguage(lang.value)}>{lang.name}</button>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}