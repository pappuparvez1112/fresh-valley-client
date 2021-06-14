import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OrderPlace from '../OrderPlace/OrdersPlace';

const CheckOut = () => {
    const user=JSON.parse(localStorage.getItem('user'));
    console.log(user);
    

    const {id}=useParams();
    const [product,setProduct]=useState({
       

    });
    console.log(product);
    const handleSubmit=()=>{

    }
    useEffect(()=>{
        fetch(`http://localhost:5500/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

   
    return (
        <div className="container">
            <div className="d-flex justify-content-center text-center ">

                <form className="form-control m-5 " onSubmit={handleSubmit}>
                <h3 className="mb-3">Place the order</h3>
                <input className="form-control text-center " type="text" name="Adress" placeholder="Write your Adress" /><br />
                     <input  className="form-control text-center" type="Email" name="userEmail" placeholder="userEmail" value={user.email}/>
                     <br />
                     <input className="form-control text-center" type="text" name="productName" placeholder="productName" value={product.name}/><br />
                     <input className="" type="text" name="price" placeholder="price" value={product.price}/><br /><br />
                     <Link to="/order"><button className="m-3 btn btn-success">Submit</button></Link>
                     <br /><br />

                    
                </form>

            </div>
            
            
           
           
        </div>
    );
};

export default CheckOut;