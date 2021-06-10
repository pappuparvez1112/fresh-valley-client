import React from 'react';
import productData from "../FakeData/FakeData.json"
import Product from '../Product/Product';

const TotalProducts = () => {
    return (
        <div className="row">
            {
                productData.map(p=> <Product product={p}></Product> )
            }
        </div>
    );
};

export default TotalProducts;