import React from "react"
import classes from "./portfolio.module.scss";
import {Col, Row} from "antd";
import Contextname from "../ContextName/index.jsx";
import NavLink from "./navLink.jsx";
import BorderImg from "./borderImg.jsx";

export default function Portfolio() {

    const portfolios = Array(2, 2, 2, 2)
    const links = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Frontend'},
        {id: 3, name: 'Backend'},
        {id: 4, name: 'Fullstack'}
    ]

    return (
        <div className={classes.wrapper} id={"portfolio"}>
            <Contextname text={'portfolio'}/>
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
                            portfolios.slice(0, 3).map((portfolio, index) => (
                                <Col span={24} md={11} xl={7} key={index.toString()}>
                                    <div className={classes.text}>
                                        <div className={classes.index}>
                                            <p>{index + 1}</p>
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className={classes.name}>Game Club</div>
                                    </div>
                                    <a target={"_blank"} href="https://">
                                        <img
                                            src="https://images.unsplash.com/photo-1652210998086-32ce065bce6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                            alt="portfolio_img"/>
                                    </a>
                                </Col>
                            ))
                        }
                    </Row>
                    {/*<div className={classes['btn-all']}>*/}
                    {/*   <button onClick={()=> navigate('/home/portfolio')}>*/}
                    {/*       {t('view_all')}*/}
                    {/*   </button>*/}
                    {/*</div>*/}
                </div>
                <BorderImg/>
            </div>
        </div>
    )
}