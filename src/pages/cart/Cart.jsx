import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import useUpdateItemCount from "../../hooks/useUpdateItemCount";
import { useContext } from "react";
import useRemoveItem from "../../hooks/useRemoveItem";
import { CartContext } from "../../context/CartProvider";
import useCheckout from "../../hooks/useCheckout";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const queryClient = useQueryClient();

  const { getNumberOfItemsInCart } = useContext(CartContext);

  const { mutate: updateCount } = useUpdateItemCount({
    onSuccess: () => {
      queryClient.invalidateQueries(["getProductsFromCart"]);
      getNumberOfItemsInCart();
    },
  });

  const { mutate: removeItem } = useRemoveItem({
    onSuccess: () => {
      queryClient.invalidateQueries(["getProductsFromCart"]);
      getNumberOfItemsInCart();
    },
  });

  const { mutate: check_out } = useCheckout();

  const getProductsFromCart = async () => {
    try {
      const token = localStorage.getItem("LunoraToken");

      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      return response?.data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["getProductsFromCart"],
    queryFn: getProductsFromCart,
    onSuccess: () => getNumberOfItemsInCart(),
  });

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 mt-[60px]">
      {/* Left Side - Cart Items */}
      <div className="flex-1 space-y-6">
        {data?.map((itemInCart) => (
          <div
            key={itemInCart._id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4 w-full md:w-3/5">
              <img
                src={itemInCart.product.imageCover}
                alt={itemInCart.product.title}
                className="w-28 h-28 object-contain rounded-xl"
              />
              <div>
                <h3 className="font-medium text-gray-800">
                  {itemInCart.product.title}
                </h3>

                <p className="text-sm text-gray-600">
                  Brand: {itemInCart.product.brand?.name}
                </p>

                <div className="flex items-center gap-3  py-2 w-fit  my-2">
                  <button
                    onClick={() =>
                      updateCount({
                        productId: itemInCart.product._id,
                        newCount: itemInCart.count - 1,
                      })
                    }
                    className="w-8 h-8 flex items-center justify-center bg-stone-100 text-gray-700  text-sm rounded-full shadow hover:bg-gray-200 transition"
                  >
                    −
                  </button>

                  <span className="text-gray-800 font-semibold  min-w-6 text-center text-sm">
                    {itemInCart.count}
                  </span>

                  <button
                    onClick={() =>
                      updateCount({
                        productId: itemInCart.product._id,
                        newCount: itemInCart.count + 1,
                      })
                    }
                    className="text-sm w-8 h-8 flex items-center justify-center bg-[#F5F0BF] text-white rounded-full shadow hover:bg-amber-200 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price Info */}
            <div className="text-right mt-4 md:mt-0">
              <button
                onClick={() => removeItem(itemInCart.product._id)}
                className="mb-4  bg-white text-gray-700 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
              >
                <IoMdClose />
              </button>

              <p className="text-lg font-semibold text-center text-gray-800">
                {/* EGP {itemInCart.price} */}
                EGP {itemInCart.price * itemInCart.count}
              </p>

              <p className="text-green-600 text-xs text-center mt-2">
                Free Delivery 🚚
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Summary */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-2xl p-6 h-fit sticky top-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between text-gray-600 mb-2">
          <span>
            Subtotal: ( Items :{" "}
            {data?.reduce(
              (totalItems, itemInCart) => totalItems + itemInCart.count,
              0
            )}
            )
          </span>
          <span>
            EGP{" "}
            {data?.reduce(
              (total, itemInCart) =>
                total + itemInCart.price * itemInCart.count,
              0
            )}
          </span>
        </div>

        <div className="flex justify-between text-gray-600 mb-2">
          <span>Shipping Fee</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between text-gray-900 font-semibold text-lg mb-4">
          <span>Total</span>
          <span>
            EGP{" "}
            {data?.reduce(
              (total, itemInCart) =>
                total + itemInCart.price * itemInCart.count,
              0
            )}
          </span>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4 text-sm text-gray-700">
          💳 Monthly payment plans from EGP 500.{" "}
          <span className="text-blue-600 cursor-pointer">
            View more details
          </span>
        </div>

        <button
          onClick={() => check_out()}
          className="mt-5 block text-center w-full px-4 py-2 bg-[#F5F0BF] text-sm rounded-md hover:brightness-105 transition"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
