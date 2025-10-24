import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import AuthSide from "../ui/AuthSide";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
function ResetPassword() {
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetPassword = async (data) => {
    try {
      const response = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        {
          // body
          email:data.email,
          newPassword:data.newPassword,
        },
        {
          // headers
          headers: {
            "Content-Type":"application/json",
          },
        }
      );
      console.log(response);
      navigate("/login")
      return response;
    } catch (error) {
      console.log(error);
    }
  };

 const { mutate , isIdle , isPending , isSuccess }= useMutation({
    mutationFn:resetPassword,
    mutationKey:["resetPassword"]
 })


 return(
    <div className="flex flex-col md:flex-row h-screen font-[Poppins] relative overflow-hidden">
      {/* Left Side (Form) */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6 relative z-10">
        <div className="w-full max-w-lg p-10">
          <h2 className="text-2xl font-semibold text-[#a48763] text-center mb-6">
            Reset Your Password
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Please enter your email and your new password below.
          </p>

          <form  onSubmit={handleSubmit((data)=> mutate(data))} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">E-mail</label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email" , {required:"Email is required"})}
              />
             
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                New Password
              </label>
              <Input
                type="password"
                placeholder="Enter your new password"
                {...register("newPassword" , {required:"New password is required"})}

              />
             
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#d9c2a5] to-[#cfb798] text-white py-3 px-10 hover:opacity-90 transition-all duration-300 "
              >
              Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <AuthSide
        icon={"🔐"} 
        title={"Reset Password"}
        subtitle={"Enter a new password and regain access to your account."}
      />
    </div>
 )
}

export default ResetPassword;
