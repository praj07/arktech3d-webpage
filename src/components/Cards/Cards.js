import React from 'react';
import CardItem from './Card/CardItem';
import './Cards.css';

import { useSelector } from 'react-redux';
function Cards() {

    const products = useSelector((state) => state.products)
    return (
        !products.length ? <h1> ERROR </h1> : 
        <div className='cards'>
            <h1>Products</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    {
                        // filter by top expensive items and then post only the first two from there
                        // otherwise add a 'featured item discriminator 
                        products.map(product => (
                            product.price > 30 ? 
                            <CardItem 
                            src= {product.pictureUrls}
                            text= {product.description}
                            price= {`$ ${product.price}`}
                            path= {`/products/${product.productId}`}/> : <br></br>

                    ))}
                    </ul>
                    <ul className="cards__items">
                    {
                        products.map(product => (
                            product.price < 30 ? 
                            <CardItem 
                            src= {product.pictureUrls}
                            text= {product.description}
                            price= {`$ ${product.price}`}
                            path={`/products/${product.productId}`}/> : <br></br>

                    ))}
                    </ul>
                </div>
            </div>  
        </div>
    );
}

export default Cards;
