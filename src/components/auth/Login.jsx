import React, { useContext } from "react";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import AuthSide from "../ui/AuthSide";
import toastify from "../../utils/toastify";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendLoginData = async (data) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          // Body
          email: data.email,
          password: data.password,
        },
        {
          // header
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      console.log(response.data.user.email);
      console.log(response.data.user.name);
      const token = response.data.token;
      localStorage.setItem("LunoraToken", token);
      localStorage.setItem("LunoraUserEmail", response.data.user.email);
      localStorage.setItem("LunoraUserName", response.data.user.name);
      toastify("Welcome back!", "success");
      navigate("/home");

      return response;
    } catch (error) {
      
      toastify(error.response.data.message ,"error");
    }
  };

  const { mutate, isPending, isSuccess, isError, isIdle } = useMutation({
    mutationKey: ["loginData"],
    mutationFn: sendLoginData,
  });

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* left side */}

      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10 ">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Sign In
          </h2>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                E-mail Address
              </label>

              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: "Email is required" })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>

              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="submit"
                className="w-1/2 bg-[#F5F0BF] font-bold  py-3 px-10 hover:opacity-90 transition-all duration-300"
              >
                Sign In
              </button>

              <Link
                to="/forgetPassword"
                type="button"
                className="w-1/2 border border-[#cfb798] text-[#a48763] py-3 px-10 text-center hover:bg-[#F5F0BF] hover:text-white  transition-all duration-300"
              >
                Forget Password
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* right side */}

      <AuthSide />
    </div>
  );
}

export default Login;
