import React, { useState } from 'react';


import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const [imageURL,setImageURL]=useState(null);

  const onSubmit = data => {
    const productData={
      name:data.name,
      imageURL:imageURL,
      price:data.price
    }
    console.log(data);
    
   

    const url=`http://localhost:5500/addProduct`;

    console.log(productData)
    fetch(url,{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(productData)
    })
    .then(res=>console.log('server side response',res))
  };
  const handleImageUpload=product=>{
      console.log(product.target.files[0]);
      const imageData=new FormData();
      imageData.set('key','0cb3c5799d4f2a1cdf46453ac935b511');
      imageData.append('image',product.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', 
        imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    

  }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                  <SideBar></SideBar>
                </div>
                <div className="col-md-8">
                    <h3 className="text-center m-5">Add new product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input
                  defaultValue="New exciting product" {...register("name")} />
                  <br />
                  <br />
                  <input
                  type="text" placeholder="price" {...register("price")} />
                  <br />
                  <br />
      

               <input type="file" onChange={handleImageUpload} />
               <br />
               <br />
      
                 {errors.exampleRequired && <span>This field is required</span>}
      
              <input type="submit" />
          </form>

                </div>

            </div>
        </div>
    );
};

export default AddProduct;