import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Category(){
    const [categories,setCategory]=useState([]) ;
    const [ProductCategory,SetProductCategory]=useState([]);
    const [finalCat,setFinalCat]=useState([]) ;
    useEffect(()=>{
        axios.get(`http://localhost:900/categories`).then((res)=>{
            setCategory(res.data)
        })
        axios.get(`http://localhost:900/products`).then((res)=>{
            console.log(res.data) ;
            SetProductCategory(res.data) ;
        })

    },[])
    //filter and get this category
    const ProductInCategory=(categoryName)=>{
         const thisCat=ProductCategory.filter((ele)=>{
                return ele.category===categoryName ;
        })
        console.log(thisCat) ;
        setFinalCat(thisCat) ;


    }
    // show all categories
    const showAll=()=>{
        setFinalCat(ProductCategory) ;
    }
    return(
<>
        <h1 className="text-center">Category Bage</h1>
        <div className="row gap-2 justify-content-center mt-3">
            <div onClick={showAll} className="col-10 btn btn-outline-primary mt-3 mb-3">Show All Categories</div>
            {
                categories.map((ele)=>{
                    return(
                    <div key={Math.random(1)} onClick={()=>{ProductInCategory(`${ele}`)}} className="col-5 btn btn-outline-primary">
                        {`${ele}`}
                    </div>
                    )
                })
            }
        </div>
        <table className="table table-striped mt-5">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tittle</th>
      <th scope="col">Price</th>
      <th scope="col">category</th>
      
    </tr>
  </thead>
  <tbody>
  {
        finalCat.map((ele)=>{
            return(
                <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.title}</td>
                <td>{ele.price}$</td>
                <td>{ele.category}</td>
                
              </tr>
            )
        })
    }
    
  </tbody>
</table>

 </>
    )
}
export default Category ;