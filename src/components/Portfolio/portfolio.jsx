import React from "react"
import classes from "./portfolio.module.scss";
import {Col, Row} from "antd";
import Contextname from "../ContextName/index.jsx";
import NavLink from "./navLink.jsx";
import BorderImg from "./borderImg.jsx";
import {useSelector} from "react-redux";

export default function Portfolio() {

    const {portfolio} = useSelector(state => state.variables)

    const links = [
        {id: 1, name: 'Всё'},
        {id: 2, name: 'Фронтенд'},
        {id: 3, name: 'Бекенд'},
        {id: 4, name: 'Фул-стак'}
    ]

    return (
        <div className={classes.wrapper} id={"portfolio"}>
            <Contextname text={'портфолио'}/>
            <div className={classes.links}>
                <div className={classes.row}>
                    {
                        links.map((link, index) => <NavLink key={index.toString()} name={link.name}/>)
                    }
                </div>
            </div>
            <div className={classes.portfolio}>
                <div className={classes.row}>
                    <Row className={classes.data}>
                        {
                            portfolio.map((item, index) => (
                                <Col data-aos="zoom-in" span={24} md={11} xl={7} key={index.toString()}>
                                    <div className={classes.text}>
                                        <div className={classes.index}>
                                            <p>{index + 1}</p>
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className={classes.name}>{item.name}</div>
                                    </div>
                                    <a target={"_blank"} href={item.link}>
                                        <img
                                            src={item.img}
                                            alt="portfolio_img"/>
                                    </a>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
                <BorderImg/>
            </div>
        </div>
    )
}