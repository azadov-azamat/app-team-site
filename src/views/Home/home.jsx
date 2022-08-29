import React, {useEffect} from 'react'
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
import AOS from "aos"
import {useSelector} from "react-redux"

export default function Home() {

    const {service} = useSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className={classes.wrapper}>
            <Header/>
           <div className="w-full" id={"service"}>
               <Contextname text={'услуги'}/>
               <div className={classes.service}>
                   <Row className={classes.row}>
                       {
                           service.map((item, index) => <Services key={index.toString()} title={item.title} about={item.text}/>)
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