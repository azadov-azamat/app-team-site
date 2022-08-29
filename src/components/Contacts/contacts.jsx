import React from 'react'
import classes from "./contact.module.scss"
import Contextname from "../ContextName/index.jsx";
import {Col, Row} from "antd";
import {BsFacebook, BsInstagram, BsTelegram, FiPhoneCall} from "react-icons/all.js";
import {useTranslation} from "react-i18next";
import photo from "../../assets/my-photo.jpg"
import abror from "../../assets/abror.jpg"

export default function Contacts() {

    const {t} = useTranslation()

    const data = [
        {
            id: 1,
            img: abror, name: 'Abror Abduhamidov', title: 'Proyekt manajer. "App team" - guruh yetakchisi. Yoshi 21 da. Westminster universiteti talabasi',
            phone: '+998', instagram: 'https://www.instagram.com/abdukhamid_ov', telegram: 'https://t.me/abdukhamid_ov', facebook: 'https://www.facebook.com'
        },
        {
            id: 2,
            img: photo, name: 'Azamat Azadov', title: 'Frontend va Backend developer. "App team" - guruh azosi. Yoshi 20 da. Freelancer', phone: '+998996802208',
            instagram: 'https://www.instagram.com/azadov_azamat/', telegram: 'https://t.me/azamat_azadov', facebook: 'https://www.facebook.com/azadov.azamat.22/'
        }
    ]
    return (
        <div className={classes.wrapper} id={'contact'}>
            <Contextname text={'Контакты'}/>
            <Row className={classes.row}>
                {
                    data.map((item, index) => (
                        <Col key={index.toString()} className={classes['card-user']}>
                            <div className={classes['card-user-responsive']}>
                                <div className={classes['user-img']}>
                                    <img
                                        src={item.img}
                                        alt="user-img"/>
                                    <p>{item.name}</p>
                                </div>
                                <div className={classes['user-about']}>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className={classes['user-contact']}>
                                <a href={`tel:${item.phone}`} className={classes.phone}>
                                    <div className={classes.icon}>
                                        <FiPhoneCall/>
                                    </div>
                                    <p>{t('call')}</p>
                                </a>
                                <div className={classes['social-link']}>
                                    <a target={"_blank"} href={item.telegram} className={classes['link']}>
                                        <BsTelegram fontSize={30}/>
                                    </a>
                                    <a target={"_blank"} href={item.instagram} className={classes['link']}>
                                        <BsInstagram fontSize={30}/>
                                    </a>
                                    <a target={"_blank"} href={item.facebook} className={classes['link']}>
                                        <BsFacebook fontSize={30}/>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}