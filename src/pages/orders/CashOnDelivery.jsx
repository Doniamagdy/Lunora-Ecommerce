import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import toastify from "../../utils/toastify";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressProvider";


function CashOnDelivery() {
  const { address } = useContext(AddressContext);
  const { cartId, getNumberOfItemsInCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [selectedDetails, setSelectedDetails] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const payCashOnDelivery = async (data) => {
    const token = localStorage.getItem("LunoraToken");

    try {
      const response = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        {
          shippingAddress: {
            details: data.details,
            phone: data.phone,
            city: data.city,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      if (response?.data.status === "success") {
        toastify("Thank you, you order has been confirmed", "success");
        navigate("/allorders");
      }

      return response?.data;
    } catch (error) {
                  toastify(error.response.data.message, "error");

    }
  };

  const { mutate } = useMutation({
    mutationFn: payCashOnDelivery,
    mutationKey: ["payCashOnDelivery"],
    onSuccess: () => getNumberOfItemsInCart(),
  });

  return (
    <div className="max-w-md mx-auto mt-50 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Cash on Delivery
      </h2>

      <form
        className="space-y-3"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        {/* Address Details  */}
        <div className="flex justify-between">
          <select
            {...register("details", { required: true })}
            onChange={(e) => setSelectedDetails(e.target.value)}
            value={selectedDetails}
            className="w-full border-b border-[#cfb798] focus:outline-none bg-transparent py-3 text-gray-700 placeholder-gray-400"
          >
            <option>Select address..</option>
            {address?.map((chosenAddress) => (
              <option key={chosenAddress._id}>{chosenAddress.details} </option>
            ))}
          </select>
          {errors.details && (
            <span className="text-red-500 mt-1">{errors.details.message}</span>
          )}
        </div>

        {/* Address City */}

        <div className="flex justify-between">
          <select
            {...register("city", { required: true })}
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
            className="w-full border-b border-[#cfb798] focus:outline-none bg-transparent py-3 text-gray-700 placeholder-gray-400"
          >
            <option>Select address..</option>
            {address?.map((chosenAddress) => (
              <option key={chosenAddress._id}>{chosenAddress.city} </option>
            ))}
          </select>

          {errors.city && (
            <span className="text-red-500 mt-1">{errors.city.message}</span>
          )}
        </div>

        {/* Phone */}

        <div className="flex justify-between">
          <Input
            {...register("phone", { required: true })}
            type={"tel"}
            placeholder={"Phone number"}
          />
          {errors.phone && (
            <span className="text-red-500 mt-1">{errors.phone.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-[#F5F0BF] font-semibold py-2 px-4 rounded-lg shadow transition cursor-pointer"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default CashOnDelivery;
