import axios  from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css" ;

function View(){
    const productId=useParams("id") ;
    const [product,setProduct]=useState({}) ;
    useEffect(()=>{
        axios.get(`http://localhost:900/products/${productId.id}`).then((res)=>{
            console.log(res.data);
            setProduct(res.data) ;
        })

    },[])
    return(
        <>
        <div className="row">
        <div className="col col-xl-6 col-lg-6 col-sm-12  image"><img src={product.image} style={{width:500}}/></div>
        <div className="col col-xl-6 col-lg-6 col-sm-12 text-center">
            <h2>{product.title}</h2>
            <h5>category :- {product.category}</h5>
            <p>{product.description}</p>
            <span className="bg-success text-light p-2">{product.price}$</span>
        </div>
        </div>
        
        </>
    )
}
export default View ;