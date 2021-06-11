import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';


const Add = () => {
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
                            <th>Add date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                        }
                    </tbody>
                </table>

            </div>
            
            
        </div>
        </div>
    );
};

export default Add;