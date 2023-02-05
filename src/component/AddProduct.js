import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct(){
    const [productTitle,setProductTitle]=useState("") ;
    const [productCat,setProductCat]=useState("") ;
    const [productPrice,setProductPrice]=useState(0) ; 
    const [productDesc,setProductDesc]=useState("") ;
    const [productImage,setProductImage]=useState("") ;
    const addProduct={
        title:productTitle ,
        price:productPrice ,
        description:productDesc,
        image:productImage

    }
    const navigate=useNavigate() ;
    const subForm=(e)=>{
        e.preventDefault() ;
        console.log(addProduct) ;
        axios.post("http://localhost:900/products",{
            title:productTitle ,
            price:productPrice ,
            description:productDesc,
            image:productImage ,
            category:productCat ,

        }).then((data)=>{
            console.log(data) ;
            navigate("/products")
        })

    }
    return(
        <>
    <form onSubmit={subForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input  onChange={(e)=>{setProductTitle(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
    <input  onChange={(e)=>{setProductCat(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input   onChange={(e)=>{setProductPrice(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input on onChange={(e)=>{setProductDesc(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Product Image url</label>
    <input onChange={(e)=>{setProductImage(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Add</button>
</form>

        </>
    )
}
export default AddProduct ;