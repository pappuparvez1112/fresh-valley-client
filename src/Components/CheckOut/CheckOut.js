import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const CheckOut = () => {

    const {id}=useParams();
    const history=useHistory()
    const [product,setProduct]=useState({});
    const user=JSON.parse(localStorage.getItem('user'));
    // console.log(user);

    const [submitData,setSubmitData]=useState({
        userName:user.name,
        userEmail:user.email,
    });
    const handleChange=(event)=>{
        const newSubmitData={...submitData}
        newSubmitData.address=event.target.value;
        setSubmitData(newSubmitData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch('http://localhost:5500/addOrder',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(submitData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);  
        })
        alert('your order successfully done')
        history.replace('/add');
       
        
        // console.log(submitData);

    }
    useEffect(()=>{
        fetch(`http://localhost:5500/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            const newSubmitData={...submitData}
            newSubmitData.productName=data.name
            newSubmitData.price=data.price
            newSubmitData.img=data.imageURL
            setSubmitData(newSubmitData)
        })
    },[id, submitData]);

   
    return (
        <div className="container">
            <div className="d-flex justify-content-center text-center ">

                <form className="form-control m-5 " onSubmit={handleSubmit}>
                <h3 className="mb-3">Place the order</h3>
                <input className="form-control text-center " onChange={handleChange} name="adress" type="text"  placeholder="Write your Adress" /><br />
                     <input  className="form-control text-center" type="Email" name="userEmail" placeholder="userEmail" value={user.email}/>
                     <br />
                     <input className="form-control text-center" type="text" name="productName" placeholder="productName" value={product.name}/><br />
                     <input className="" type="text" name="price" placeholder="price" value={product.price}/><br /><br />
                     <button className="btn btn-success">Submit</button>
                     <br /><br />

                    
                </form>

            </div>
            
            
           
           
        </div>
    );
};

export default CheckOut;