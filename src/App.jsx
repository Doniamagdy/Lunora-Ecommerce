import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ForgetPassword from "./components/auth/ForgetPassword";
import VerifyCode from "./components/auth/VerifyCode";
import ResetPassword from "./components/auth/ResetPassword";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/verifyCode" element={<VerifyCode />}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>

        <Route path="/home" element={<Home />} />
      </Routes>
  
  );
}

export default App;
