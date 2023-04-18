import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';


const OrdersPlace = () => {

    const user=JSON.parse(localStorage.getItem('user'));
    const[myorder,setMyOrder]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5500/orders/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrder(data))
    },[user.email])
    return (
        <div> 
            {
                myorder.map(order=><SingleOrder order={order}></SingleOrder>)
            }
 
        </div>
    );
};

export default OrdersPlace;