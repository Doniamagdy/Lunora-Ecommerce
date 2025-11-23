import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ProductCard from "../../components/ui/ProductCard";
import { useParams } from "react-router-dom";


function SpecificBrand() {
        const params = useParams()


  const getSpecificBrand = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?brand=${params._id}`
      );
      console.log(response.data.data);
      
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };


  const {data}= useQuery({
    queryKey:['specificBrand'],
    queryFn:getSpecificBrand
  })

  return <div className="mt-24 pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
 {data?.map((brand)=>  <ProductCard 
 id ={brand._id}
    image={brand.imageCover}
    title={brand.title}
   brand={brand.brand.name}
   price={brand.price}
  />)}
  </div>;
}

export default SpecificBrand;
