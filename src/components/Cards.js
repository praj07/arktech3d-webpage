import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Products</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-4.png'
                        text='Maple leafs encased coaster'
                        label='NHL'
                        path='/services'/>
                        <CardItem 
                        src='images/img-1.jpeg'
                        text='Golden NBA Championship Trophy'
                        label='NBA'
                        path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-2.jpeg'
                        text='Raptors Away Colour Coaster'
                        label='NBA'
                        path='/services'/>
                        <CardItem 
                        src='images/img-3.jpeg'
                        text='Raptors Black & White Colour Coaster'
                        label='NBA'
                        path='/services'/>
                        <CardItem 
                        src='images/img-5.jpeg'
                        text='Raptors North Side Colour Coaster'
                        label='NBA'
                        path='/services'/>
                    </ul>
                </div>
            </div>  
        </div>
    );
}

export default Cards;
