import React, { useEffect, useState } from 'react';

import SideBar from '../SideBar/SideBar';
import Submit from '../Submit/Submit';


const Add = () => {
    const [registration,setRegistration]=useState([]);

    useEffect(()=>{
        fetch(`https://fresh-valley-server-site-pappuparvez1112.vercel.app/orders`)
        .then(res=>res.json())
        .then(data=>setRegistration(data))

    },[])
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <SideBar></SideBar>
               

            </div>
            <div className="col-md-8">
                <h3 className="text-center m-5">Manage product</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                           registration.map(count=><Submit count={count} ></Submit>)
                       }  
                       
                    </tbody>
                </table>

            </div>
            
            
        </div>
        </div>
    );
};

export default Add;