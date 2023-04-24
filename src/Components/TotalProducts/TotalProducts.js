import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const TotalProducts = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5500/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    return (
        <div className="row">
            {
                products.map(p=> <Product product={p}></Product> )
            }
        </div>
    );
};

export default TotalProducts;