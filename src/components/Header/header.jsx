import React from "react"
import classes from "./header.module.scss"
import HeaderForm from "../HeaderForm/HeaderForm.jsx";
import {BsFacebook, BsInstagram, BsTelegram} from "react-icons/all";
import {useTranslation} from "react-i18next";

export default function Header() {

    const {t} = useTranslation()

    return (
        <div className={classes.wrapper}>
            <img
                src={'https://images.unsplash.com/photo-1661522276576-b3e5b8eb47c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                className={classes['header-img']}/>
            <div className={classes['header-content']}>
                <div className={classes['header-data']}>
                    <div className={classes['header-title']}>
                        Web-design
                    </div>
                    <div className={classes['header-info']}>
                        Веб-дизайнер опирается на пожелания аудитории, проектируя сайты и приложения так, чтобы помочь
                        пользователям сделать, что они хотят — например, купить товар, узнать новости или пообщаться с
                        друзьями. Он — самый настоящий проводник клиента в сложном мире бизнеса.
                    </div>
                </div>

                <div className={classes['header-form']}>
                    <HeaderForm/>
                </div>

                <div className={classes.application}>
                    <button>{t('submit_application')}</button>
                </div>

                <div className={classes['social-media']}>
                    <div className={classes['vr-line']}></div>

                    <div className={classes['social-link']}>
                        <a target={"_blank"} href="https://t.me/azamat_azadov" className={classes['link']}>
                            <BsTelegram fontSize={30}/>
                        </a>
                        <a target={"_blank"} href="https://www.instagram.com/app_team_" className={classes['link']}>
                            <BsInstagram fontSize={30}/>
                        </a>
                        <a target={"_blank"} href="https://www.facebook.com/azadov.azamat.22/" className={classes['link']}>
                            <BsFacebook fontSize={30}/>
                        </a>
                    </div>
                    <div className={classes['vr-line']}></div>
                    <div className={classes['g-line']}></div>
                </div>
            </div>
        </div>
    )
}