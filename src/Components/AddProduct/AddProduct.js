import React from 'react';


import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const handleImageUpload=product=>{
      console.log(product.target.files[0]);
      const imageData=new FormData();
      imageData.set('key','0cb3c5799d4f2a1cdf46453ac935b511');
      imageData.append('image',product.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', 
        imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
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
      
                  <input defaultValue="test" {...register("example")} />
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