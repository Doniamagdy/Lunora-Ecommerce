import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReusableButton from "../../components/ui/ReusableButton";
import { FaMobileAlt } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import AddAddress from "./AddAddress";
import useDeleteAddress from "../../hooks/useDeleteAddress";


function Address() {

  const {mutate} = useDeleteAddress()

  const getAddress = async () => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/addresses",
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response?.data?.data);

      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["getAddress"],
    queryFn: getAddress,
  });

  return (
    <div className="mt-10">
      <div className="flex justify-between">

      <h2 className="text-3xl">Saved Addresses</h2>
        <AddAddress />
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {data?.map((address) => (
          <div
            key={address._id}
            className="flex-1 bg-slate-50 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div>
              <div>
                <p className="text-3xl ">
                  {address.name}
                </p>

                <div className="text-gray-700 mt-4 space-y-1">
                  <p className="flex">
                    <GrMapLocation className="my-2 text-2xl" />{" "}
                    <span className="text-nd mt-2.5 ms-2 ">
                      {address.details}
                    </span>
                  </p>
                  <p className="flex">
                    <GiModernCity className="my-2 text-2xl" />{" "}
                    <span className="text-md mt-2.5 ms-2">{address.city}</span>
                  </p>
                  <p className="flex">
                    <FaMobileAlt className="my-2 text-2xl" />{" "}
                    <span className="text-md mt-2.5 ms-2 ">
                      {address.phone}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex mt-4 mb-2 gap-2">
                <ReusableButton buttonText={"Delete address"}  onClick={()=> mutate(address._id)}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
