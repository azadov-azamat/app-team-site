import React from 'react'
import classes from "./reviews.module.scss"
import {AiOutlineStar, AiTwotoneStar, BiUserCircle} from "react-icons/all.js";

export default function Review() {

    const stars = Array(2, 2, 2, 2)
    return (
        <div className={classes.review}>
            <div className={classes['user-img']}>
                <BiUserCircle fontSize={60}/>
                <p>User name</p>
            </div>
            <div className={classes.comment}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequatur corporis
                    dignissimos fuga id illo ipsum laudantium obcaecati perspiciatis?</p>
            </div>
            <div className={classes.stars}>
                {stars.map((item, index)=>  <AiTwotoneStar fontSize={20} key={index}/>)}
            </div>
        </div>
    )
}