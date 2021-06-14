import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const product=props.product;
    const {_id,name ,imageURL ,price}=product;
    console.log(product);
    return (
        <div className="col-md-4 mb-3">
            
            <Link to={`/checkout/${_id}`}>
        <div className=" m-3 shadow rounded p-3 h-100">

              <img className="img-fluid" src={imageURL} alt="" />

                <h4>{name}</h4>

              <h3 >{price}</h3>

            <button className=" btn btn-success"> Buy now</button>
        </div>
             
             </Link>
            
            
        </div>
    );
};

export default Product;