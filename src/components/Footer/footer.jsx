import React from 'react'
import classes from "./footer.module.scss"
import logo from "../../assets/png/logo-name.png"
import {Link} from "react-router-dom"
import {BsFacebook, BsInstagram, BsTelegram} from "react-icons/all.js"
import {useTranslation} from "react-i18next";
import {defaultRoute} from "../../utils/constants.js";

export default function Footer() {

    const {t} = useTranslation()

    const links = [
        {id: 1, name: 'service', href: '#service'},
        {id: 2, name: 'portfolio', href: '#portfolio'},
        {id: 3, name: 'contact', href: '#contact'}
    ]

    return (
        <footer className={classes.wrapper}>
            <div className={classes.footer}>
                <Link to={defaultRoute} className={classes.logo}>
                    <img src={logo} alt="logo-system"/>
                </Link>
                <div className={classes.links}>
                    <ul>
                        {links.map(link => <li key={link.id}><a href={link.href}>{t(link.name)}</a></li>)}
                    </ul>
                </div>
                <div className={classes['social-link']}>
                    <a target={"_blank"} href="https://t.me/azamat_azadov" className={classes['link']}>
                        <BsTelegram fontSize={30}/>
                    </a>
                    <a target={"_blank"} href="https://www.instagram.com/app_team_/" className={classes['link']}>
                        <BsInstagram fontSize={30}/>
                    </a>
                    <a target={"_blank"} href="https://www.facebook.com/azadov.azamat.22/" className={classes['link']}>
                        <BsFacebook fontSize={30}/>
                    </a>
                </div>
            </div>
            {/*<div className={classes.data}>*/}
            {/*    <div className={classes['our-data']}>*/}
            {/*        <div className={classes.info}>*/}
            {/*            <ul>*/}
            {/*                <li>*/}
            {/*                    <Link to={'/'}>*/}
            {/*                        <GrLocation/>*/}
            {/*                        <span>Online</span>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to={'/'}>*/}
            {/*                        <MdOutlineEmail/>*/}
            {/*                        <span>info@mail.uz</span>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*                <li>*/}
            {/*                    <Link to={'/'}>*/}
            {/*                        <BiPhoneCall/>*/}
            {/*                        <span>+998 99 680-22-08</span>*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={classes['form-header']}>*/}
            {/*        <HeaderForm/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </footer>
    )
}