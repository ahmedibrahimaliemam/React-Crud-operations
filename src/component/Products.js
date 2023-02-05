import React from "react";
import { useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./operation.css" ;
import { logDOM } from "@testing-library/react";
import Swal from 'sweetalert2' ;
function Products(){
    const [product,setProduct]=useState([]) ;
    useEffect(()=>{
        getData()

    },[])
    const getData=()=>{
        axios.get(`http://localhost:900/products/`).then((res)=>{
            console.log(res.data) ;
            setProduct(res.data) ;
        })
    }
    // function delete
    const Delete=(ele)=>{
        Swal.fire({
            title:`Are You Sure To Delete ${ele.title}?` ,
            showCancelButton:true ,
        }).then((res)=>{
            if(res.isConfirmed){
                axios.delete(`http://localhost:900/products/${ele.id}`).then((res)=>{
                    console.log(res) ;
                }).then((res)=>{
                    getData() ;
                })
            }
        })
       

    }
    //get AllProducts
    const getAllProducts=()=>{
        getData() ;
    }
    return(
        
        <>
        <h1 className="text-center">This Is Products Bage</h1>
        <div className="row  mt-2 justify-content-center">
        <Link state={{listStyle:"none",color:"black"}} className="col-10 btn btn-outline-success mt-3" to="/products/addProduct">Add New Product</Link>
        </div>
        <table className="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tittle</th>
      <th scope="col">Price</th>
      <th scope="col operation">Operation</th>
      
    </tr>
  </thead>
  <tbody>
    {
        product.map((ele)=>{
            return(
                <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.title}</td>
                <td>{ele.price}$</td>
                <td><div onClick={()=>{
                    Delete(ele)
                }} className="btn btn-danger">Delete</div></td>
                <td><Link to={`view/${ele.id}`} className="btn btn-outline-info text-dark">View</Link></td>
                <td><Link to={`edit/${ele.id}`} className="btn btn-primary">Edit</Link></td>
                
              </tr>
            )
        })
    }
  </tbody>
</table>

 </>
    )
}
export default Products ;