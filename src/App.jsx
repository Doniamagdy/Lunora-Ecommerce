import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgetPassword from "./components/auth/ForgetPassword";
import VerifyCode from "./components/auth/VerifyCode";
import ResetPassword from "./components/auth/ResetPassword";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/categories/Categories";
import Brands from "./pages/brands/Brands";
import SubCategories from "./pages/subCategories/SubCategories";
import Cart from "./pages/cart/Cart";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute"
import WishList from "./pages/wishlist/WishList";
import Address from "./pages/address/Address";
import AddAddress from "./pages/address/AddAddress";



function App() {
  return (
    <Routes>
          {/* Auth */}  
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/verifyCode" element={<VerifyCode />} />
      <Route path="/resetPassword" element={<ResetPassword />} />


    <Route path="/" element={ <Layout />  } >

      {/* Products */}
      <Route path="home" element={ <Home /> } />
      <Route path="productDetails/:_id" element={<ProductDetails />} />

      {/* Categories */}
      <Route path="categories" element={<Categories />} />
      {/* SubCategories */}
      <Route path="subCategories/:_id" element={<SubCategories />} />

      {/* Brands */}
      <Route path="brands" element={<Brands />} />

      {/* Cart */}
      <Route path="cart" element={<Cart />} />

      {/* Wishlist */}
      <Route path="wishlist" element={<WishList />} />

     {/* Address */}
     <Route path="address" element={<Address />} />
      <Route path="add-address" element={<AddAddress />} />

      </Route>

    </Routes>
  );
}

export default App;
