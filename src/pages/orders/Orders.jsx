import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { UserContext } from "../../context/UserProvider";

function Orders() {
  // const { cartOwnerId } = useContext(CartContext);
   const { userId } = useContext(UserContext);

  const token = localStorage.getItem("LunoraToken");
  // const cartOwnerId = localStorage.getItem("LunoraCartOwnerId");
  // console.log(cartOwnerId);

  const getOrders = async () => {
    try {
      const response = await axios.get(
        // id is cartOwner id
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(response?.data);

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["Orders", userId],
    queryFn: getOrders,
    enabled: !!userId
  });

  return (
    <div className="min-h-screen mt-12 py-12">
      <div className="px-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Orders</h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all border border-gray-200"
            >
              {/* Payment Method */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Order #{order._id.slice(-6)}
                </h2>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  {order.paymentMethodType}
                </span>
              </div>

              {/* Shipping */}
              <div className="mb-4 text-gray-700 text-sm">
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(order.createdAt).toISOString().slice(0, 10)}
                  {"   "}
                  {new Date(order.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>

                {/* <p>
                  <span className="font-medium">Address:</span>{" "}
                  {order.shippingAddress.details}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {order.shippingAddress.phone}
                </p>
                <p>
                  <span className="font-medium">City:</span>{" "}
                  {order.shippingAddress.city}
                </p> */}
              </div>

              {/* Cart Items */}
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Items</h3>

                <div className="space-y-3 pr-2">
                  {order.cartItems.map((item) => (
                    <div key={item._id} className="flex gap-3 items-center">
                      <img
                        src={item.product.imageCover}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div>
                        <p className="text-sm text-gray-900 font-medium">
                          {item.product.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.product.brand.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.product.category.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <p className="mt-5 font-semibold text-gray-900 text-lg">
                Total: {order.totalOrderPrice} EGP
              </p>

           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
