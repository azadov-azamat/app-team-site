import React from 'react'
import classes from './reviews.module.scss'
import Review from "./review"
import OwlCarousel from 'react-owl-carousel'
import Contextname from "../ContextName/index.jsx"
import {useSelector} from "react-redux";

export default function Reviews() {

    const {portfolio} = useSelector(state => state.variables)

    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 1.5
        },
        640: {
            items: 2
        },
        950: {
            items: 3
        },
        1024: {
            items: 2
        },
        1200: {
            items: 2
        },
        1300: {
            items: 3
        }
    }

    return (
        <div className={classes.reviews}>
            <Contextname text={'Отзывы'}/>
            <div className={classes['owl-theme']}>
                <OwlCarousel
                    loop
                    autoplay
                    nav={false}
                    center={true}
                    margin={10}
                    responsive={responsive}
                    smartSpeed={500}
                >
                    {portfolio.map((item, index) => (
                        <Review key={index.toString()}/>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    )
}