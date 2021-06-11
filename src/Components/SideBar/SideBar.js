import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div style={{backgroundColor:"darkgrey",height:"800px"}} className="m-5 p-5 ">
        
        <Link to="/add"><h3 >Manage Product</h3></Link>
        <Link to="/addProduct"><h3>Add product</h3></Link>
        

    </div>

    );
};

export default SideBar;