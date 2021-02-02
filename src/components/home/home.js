import React from 'react';
import CoverHome from './cover'
import Youtubers from './youtubers'
import FoodsRestaurants from './foodsRestaurants'
import Enterprauners from './enterprauners'
import Automotive from './automotive'
import CarouselPage from './event'


export default function Home() {
    return (
        <div>
            <CoverHome />
            <CarouselPage />
            <Youtubers />
            <FoodsRestaurants />
            <Enterprauners />
            <Automotive />
            
        </div>
    )
}