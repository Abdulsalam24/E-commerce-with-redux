import React from 'react'
// import {Link} from 'react-router-dom'

import imgOne from '../asset/img/imgOne.jpg'
import imgTwo from '../asset/img/imgTwo.jpg'
import imgThree from '../asset/img/imgThree.jpg'

const Home = () => {
    
    return (
        <div
            id="carouselExampleIndicators"
            className="home carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgOne} className="d-block w-100" alt="..."/></div>
                    <div className="carousel-item">
                        <img src={imgTwo} className="d-block w-100" alt="..."/></div>
                        <div className="carousel-item">
                            <img src={imgThree} className="d-block w-100" alt="..."/></div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                )
}

export default Home