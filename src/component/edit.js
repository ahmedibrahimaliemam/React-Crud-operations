import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function Edit(){
  const navigate=useNavigate() ;
    const [product,setProduct]=useState({}) ;
    const thisId=useParams("id") ;
    useEffect(()=>{
        axios.get(`http://localhost:900/products/${thisId.id}`).then((res)=>{
            setProduct(res.data) ;
        })

    },[])
    //on submit to edit data
    const editData= async()=>{
     await axios.put(`http://localhost:900/products/${thisId.id}`,{
        title:product.title,
        price:product.price,
        category:product.category ,
        description:product.description,
        image:product.image,
      })}
    //aleart
    const sureEdit=(ele)=>{
      Swal.fire({
          title:`Are You Sure To Edit ${ele.title} product?` ,
          showCancelButton:true ,
      }).then((res)=>{
          if(res.isConfirmed){
             editData() ;
             navigate('/Products')

          }
      })
     

  }
    return(
        <>
        <form onSubmit={(e)=>{
          e.preventDefault() ;
          sureEdit(product)

        }}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input onChange={(e)=>{product.title=e.target.value}} defaultValue={product.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input onChange={(e)=>{product.price=e.target.value}} defaultValue={product.price}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">category</label>
    <input onChange={(e)=>{product.price=e.target.value}} defaultValue={product.category}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
    <input onChange={(e)=>{product.price=e.target.value}} defaultValue={product.description}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">image URL</label>
    <input onChange={(e)=>{product.price=e.target.value}} defaultValue={product.image}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Edit</button>
</form>

        </>
    )
}
export default Edit ;