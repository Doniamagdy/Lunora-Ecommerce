import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgetPassword from "./components/auth/ForgetPassword";
import VerifyCode from "./components/auth/VerifyCode";
import ResetPassword from "./components/auth/ResetPassword";
import ProductDetails from "./pages/products/ProductDetails";
import Categories from "./pages/categories/Categories";
import Brands from "./pages/brands/Brands";
import SubCategories from "./pages/subCategories/SubCategories";
import Cart from "./pages/cart/Cart";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import WishList from "./pages/wishlist/WishList";
import Address from "./pages/address/Address";
import AddAddress from "./pages/address/AddAddress";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/orders/Orders";
import Products from "./pages/products/Products";
import SpecificBrand from "./pages/brands/SpecificBrand";
import SpecificCategory from "./pages/categories/SpecificCategory";
import PopularProducts from "./pages/products/PopularProducts";
import NoProductFound from "./pages/NoProductFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <> 
    <Routes>
      {/* Auth */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/verifyCode" element={<VerifyCode />} />
      <Route path="/resetPassword" element={<ResetPassword />} />

      <Route path="/" element={<Layout />}>
        {/* Home */}
        <Route path="home" element={<Home />} />

        {/* Products */}
        <Route path="products" element={<Products />} />
        <Route path="productDetails/:_id" element={<ProductDetails />} />
        <Route path="popular-products" element={<PopularProducts />} />

        {/* Categories */}
        <Route path="categories" element={<Categories />} />
        <Route path="specific-categories/:_id" element={<SpecificCategory />} />

        {/* SubCategories */}
        <Route path="subCategories/:_id" element={<SubCategories />} />

        {/* Brands */}
        <Route path="brands" element={<Brands />} />
        {/* Specific Brand */}
        <Route path="specific-brand/:_id" element={<SpecificBrand />} />

        {/* Cart */}
        <Route path="cart" element={<Cart />} />

        {/* Wishlist */}
        <Route path="wishlist" element={<WishList />} />

        {/* Address */}
        <Route path="address" element={<Address />} />
        {/* <Route path="add-address" element={<AddAddress />} /> */}

        {/* Profile */}
        <Route path="profile" element={<Profile />} />

        {/* No Product */}
        <Route path="noProduct" element={<NoProductFound />} />

        {/* About us */}
        <Route path="about-us" element={<AboutUs />} />

        {/* Contact us */}
        <Route path="contact-us" element={<ContactUs />} />

          {/* Orders */}
        <Route path="allorders" element={<Orders />} />
      </Route>
    </Routes>


<ToastContainer/>
    </>
  );
}

export default App;
