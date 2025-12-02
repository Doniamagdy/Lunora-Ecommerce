import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import toastify from "../../utils/toastify";


function SubCategories() {
  const params = useParams();

  const getSubCategories = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories/${params._id}/subcategories`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response?.data?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { data } = useQuery({
    queryKey: ["subCategories", params._id],
    queryFn: getSubCategories,
  });

  return (
    <div className="mt-20">
      {data?.map((sub) => (
        <h2 key={sub._id}>{sub.name}</h2>
      ))}
    </div>
  );
}

export default SubCategories;
