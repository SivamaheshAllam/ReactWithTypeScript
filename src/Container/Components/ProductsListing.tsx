import React, { useEffect } from "react";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../Redux/actions/productActions";
import ProductComponent from "./ProductComponent";
function ProductsListing() {
  let dispatch = useDispatch();
  let fetchProducts = async () => {
    let res: any = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    // console.log(res);
    dispatch(setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <div>
      <ProductComponent />
    </div>
  );
}

export default ProductsListing;
