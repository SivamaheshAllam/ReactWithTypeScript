import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../Redux/actions/productActions";
import { Card } from "react-bootstrap";

function ProductDetails() {
  const {productId}= useParams();
  console.log(productId)
  let productDetails = useSelector((state) => {
    console.log("productDetails state", state);
  });
  let dispatch=useDispatch()


  let fecthProductDetails= async (id:any)=>{
      let response:any=await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch((err:any)=>{
       console.log('Err',err)
      });
      dispatch(selectedProduct(response.data))
  };

  useEffect(()=>{
    fecthProductDetails(productId);
  },[productId])

  return <div>
    <Card>
      <Card.Header></Card.Header>
    </Card>
  </div>;
}

export default ProductDetails;
