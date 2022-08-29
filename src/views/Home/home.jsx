import React from 'react'
import classes from "./home.module.scss"
import Header from "../../components/Header/index.jsx"
import Contextname from "../../components/ContextName"
import Services from "../../components/Service"
import {Row} from "antd"
import Portfolio from "../../components/Portfolio"
import {useTranslation} from "react-i18next"
import Reviews from "../../components/Reviews"
import {useNavigate} from "react-router"
import ScrollUp from "../../components/ScrollUp"
import Contacts from "../../components/Contacts"

export default function Home() {

    const {t} = useTranslation()
    const navigate = useNavigate()

    const data = Array(2, 2, 2)
    const portfolios = Array(2, 2, 2, 2)
    const links = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Frontend'},
        {id: 3, name: 'Backend'},
        {id: 4, name: 'Fullstack'}
    ]

    return (
        <div className={classes.wrapper}>
            <Header/>
           <div className="w-full" id={"service"}>
               <Contextname text={'services'}/>
               <div className={classes.service}>
                   <Row className={classes.row}>
                       {
                           data.map((item, index) => <Services key={index.toString()} title={"Web-Design"}
                                                               about={"Именно графический дизайн может помочь продать идею или продукт. Создание фирменного стиля компании, брендинга, упаковки в последнее время все более востребовано на рынке. "}/>)
                       }
                   </Row>
               </div>
           </div>
            <Portfolio/>
            <Reviews/>
            <Contacts/>
            <ScrollUp/>
        </div>
    )
}