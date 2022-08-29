import React from "react"
import classes from "./service.module.scss";
import {Col} from "antd";

export default function Services({title, about}){

    return(
        <Col span={24} md={11} xl={7} className={classes.wrapper}>
            <div className={classes.title}>{title}</div>
            <p>{about}</p>
        </Col>
    )
}