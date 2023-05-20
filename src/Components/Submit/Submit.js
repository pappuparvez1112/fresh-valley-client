import React from 'react';
import { useHistory } from 'react-router-dom';

const Submit = (props) => {
    
    const history=useHistory();
    const {_id,productName,userEmail,price}=props.count;
    
    const handleDelete=()=>{
        fetch(`https://fresh-valley-server-site-pappuparvez1112.vercel.app/deleteorder/${_id}`,{
            method:'DELETE',

        })
        .then(res=>res.json())
        .then(data=>{
            alert('your information is successfully delete')
              history.replace('/');
        });
    }
         
    return (
    <tr>
        <td>{productName}</td>
        <td>{userEmail}</td>
        <td>{price}</td>
        
        <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
    </tr>
    );
};

export default Submit;