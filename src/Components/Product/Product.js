import React from 'react';

const Product = (props) => {
    const product=props.product;
    const {name ,img ,price}=product;
    console.log(product);
    return (
        <div className="col-md-4 mb-3">
            <div className=" m-3 shadow rounded p-3 h-100">
                
                <img className="img-fluid" src={img} alt="" />
                
                
                <h4>{name}</h4>
                <h3 >{price}</h3>
                
                
                

                
                
                <button className=" btn btn-success">Buy now</button>
                
                

                
            </div>
            
        </div>
    );
};

export default Product;