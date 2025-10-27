import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ReusableLink from "../../components/ui/ReusableLink";
import { Link } from "react-router-dom";


function Categories() {

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data);

      return response.data.data;

    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
  });

  return (
    <div className="flex flex-wrap justify-center gap-8 my-8 ">
      {data?.map((category) => (
                <Link to={`/subCategories/${category._id}`}  key={category._id}> 

        <div
          className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg mt-[65px]">
            <img src={category.image} className="w-full h-full object-cover" />
          </div>

          <h5 className="mt-3 text-gray-700 font-medium">{category.name}</h5>
        </div>
        </Link>
      ))}
      
    </div>
    
  );
}

export default Categories;
