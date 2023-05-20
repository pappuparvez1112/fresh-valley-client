import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';


const OrdersPlace = () => {

    const user=JSON.parse(localStorage.getItem('user'));
    const[myorder,setMyOrder]=useState([]);
    useEffect(()=>{
        fetch(`https://fresh-valley-server-site-pappuparvez1112.vercel.app/orders/${user.email}`)
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