import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ReusableButton from "../../components/ui/ReusableButton";
import { FaMobileAlt } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import AddAddress from "./AddAddress";


function Address() {

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
    <div className="mt-24 max-w-2xl mx-auto px-4">
      <div className="flex justify-between">
      <h2 className="text-3xl">Saved Addresses</h2>
        <AddAddress />

      </div>
      

      <div className="space-y-5 my-4">
        {data?.map((address) => (
          <div
            key={address._id}
            className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div>
              <div>
                <p className="text-3xl  font-serif font-semibold text-[#C3A27B]">
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
                <ReusableButton buttonText={"Edit address"} />

                <ReusableButton buttonText={"Delete address"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
