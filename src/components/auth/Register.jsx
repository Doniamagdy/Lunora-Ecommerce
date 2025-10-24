import React from "react";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import AuthSide from "../ui/AuthSide";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendRegistrationData = async (data) => {
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        {
          // Body
          name: data.name,
          email: data.email,
          password: data.password,
          rePassword: data.rePassword,
          phone: data.phone,
        },
        {
          // header
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      const token = response.data.token;
      const LunoraToken = localStorage.setItem("LunoraToken", token);
      navigate("/login");

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate, isPending, isSuccess, isError, isIdle } = useMutation({
    mutationKey: ["registrationData"],
    mutationFn: sendRegistrationData,
  });

  return (
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* left side */}

      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10 ">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Create Your Account
          </h2>

          <form
            onSubmit={handleSubmit((data) => mutate(data))}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <Input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
              />
            </div>

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

            {/* Re-enter Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Re-enter Password
              </label>
              <Input
                type="password"
                placeholder="Confirm password"
                {...register("rePassword", {
                  required: "Confirm password is required",
                })}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>

              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: "Phone number is required" })}
              />
            </div>

            {/* Terms */}
            <div className="flex items-center text-sm text-gray-600 mt-3">
              <input type="checkbox" className="mr-2 accent-[#cfb798]" />
              <p>
                By signing up, I agree with{" "}
                <a href="#" className="text-[#a48763] underline">
                  Terms & Conditions
                </a>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d9c2a5] to-[#cfb798] text-white py-3 px-10 hover:opacity-90 transition-all duration-300"
              >
                Sign Up
              </button>
              <Link
              to="/login"
                type="button"
                className="border border-[#cfb798] text-[#a48763] py-3 px-10 hover:bg-[#f1e6d6] transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* right side */}
      <AuthSide icon={"📝"} title={"Create Your Account"} subtitle={"“Join us today and start your shopping journey with exclusive offers.”"}/>


    </div>
  );
}

export default Register;
