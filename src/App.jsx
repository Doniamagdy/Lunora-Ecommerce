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

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/verifyCode" element={<VerifyCode />} />
      <Route path="/resetPassword" element={<ResetPassword />} />

      {/* Products */}
      <Route path="/home" element={<Home />} />
      <Route path="/productDetails/:_id" element={<ProductDetails />} />

      {/* Categories */}
      <Route path="/categories" element={<Categories />} />
      {/* SubCategories */}
      <Route path="/subCategories/:_id" element={<SubCategories />} />

      {/* Brands */}
      <Route path="/brands" element={<Brands />} />
    </Routes>
  );
}

export default App;
