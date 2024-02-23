import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ProductDetail from "../components/ProductDetail";

function Product() {
  const { slug } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:4000/data?slug=${slug}`
  );


  if (isPending) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="max-container">
      <div className="pt-4 pb-6 md:pt-8 lg:pt-20 lg:pb-14">
      <Link className="text-base" to="/">Go back</Link>
      </div>
      <div>{data && data.map((item)=>{
        return <ProductDetail key={item.id} product={item}/>
      })}</div>
    </div>
  );
}

export default Product;
