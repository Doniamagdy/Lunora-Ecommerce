import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function EditPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("LunoraToken");

  const updateLoggedInUserPassword = async (data) => {
    try {
      const response = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
        {
          currentPassword: data.currentPassword,
          password: data.password,
          rePassword: data.rePassword,
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate } = useMutation({
    mutationFn: updateLoggedInUserPassword,
    mutationKey: ["updateLoggedInUserPassword"],
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg  space-y-4">
      <h2 className="text-xl font-semibold px-6 pt-4">Change Password</h2>

      <form
        className="p-6 space-y-4"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <div>
          <label className="block text-sm mb-1">Current Password</label>
          <Input
            {...register("currentPassword", { required: true })}
            type={"password"}
            placeholder={"Current password"}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">New Password</label>
          <Input
            {...register("password", { required: true })}
            type={"password"}
            placeholder={"New password"}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Confirm Password</label>
          <Input
            {...register("rePassword", { required: true })}
            type={"password"}
            placeholder={"Confirm password"}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            style={{ backgroundColor: "#F5F0BF" }}
            className="px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md focus:outline-none"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPassword;
