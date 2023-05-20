import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const TotalProducts = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://fresh-valley-server-site-pappuparvez1112.vercel.app/products')
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