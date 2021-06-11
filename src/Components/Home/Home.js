import React from 'react';
import TotalProducts from '../TotalProducts/TotalProducts';

const Home = () => {
    return (
        <div className="container">
            <div className="m-5">
               <div className="d-flex justify-content-center">
                 <input className="form-control" type="text" placeholder="Search" />
                 <button className="btn btn-success" >Search</button>
              </div>
            </div>
            <TotalProducts/>

        </div>
    );
};

export default Home;