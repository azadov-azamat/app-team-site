import React from "react"
import classes from "./service.module.scss";
import {Col} from "antd";

export default function Services({title, about}){

    return(
        <Col span={24} md={11} xl={7} className={classes.wrapper}>
            <div data-aos="fade-up" className={classes.title}>{title}</div>
            <p data-aos="fade-up"
               data-aos-duration="2000">{about}</p>
        </Col>
    )
}