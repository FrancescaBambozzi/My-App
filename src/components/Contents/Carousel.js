import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import data from '../../assets/json/data'

const cities = data;

const Carousel = () => (
    <Slider autoplay={1000}>
        {cities.map((city, index) => <div className="slide-content" key={index} style={{ background: `url('${city.image}') no-repeat center`, height: '230px' }}>
            <h2>{city.name}</h2>
            <div>{city.country}</div>
        </div>)}
    </Slider>
)

export default Carousel;