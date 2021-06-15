import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleOrder = (props) => {

    
    const {_id,userName,productName,price, img}=props.order;
    
    const history=useHistory();
    const handleDelete=()=>{
        fetch(`http://localhost:5500/deleteorder/${_id}`,{
            method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
            alert('your information is successfully delete')
              history.replace('/');
        });
    }
    
    return (
       <div className="container">
            <div  className="col-md-6 text-center ">
            <div  className="d-flex justify-content-between shadow text-align-center p-5 ms-5 mt-5 ">
                <div style={{width:"400px"}} className="mb-5 ms-5 me-5">
                    <img style={{width:"200px"}} className="img-fluid" src={img} alt="" />

                </div>
                <div >
                <h3>{userName}</h3>
                <h4>{productName}</h4>
                 <h5>{price}</h5>
                 <button onClick={handleDelete} className="btn btn-danger">Remove</button>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default SingleOrder;