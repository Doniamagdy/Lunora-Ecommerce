import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toastify from "../../utils/toastify";

function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("LunoraToken");

  const updateUserData = async (data) => {
    try {
      const response = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/users/updateMe",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
        },
        {
          headers: {
            token: token,
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("LunoraUserName", response?.data.user.name);
      localStorage.setItem("LunoraUserEmail", response?.data.user.email);
      toastify("Your data has been changed successfully", "success");
      return response?.data;
    } catch (error) {
      toastify(error.response.data.message, "error");
    }
  };

  const { mutate } = useMutation({
    mutationFn: updateUserData,
    mutationKey: ["updateUserData"],
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold px-6 pt-4">
        Edit user{" "}
        <span className="text-sm text-stone-400">
          ( To change user data email must be changed )
        </span>
      </h2>
      <form
        className="p-6 space-y-4"
        onSubmit={handleSubmit((data) => mutate(data))}
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input
            type="text"
            placeholder="Update your name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500 mt-1">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input
            type="email"
            placeholder="Update your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 mt-1">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <Input
            type="text"
            placeholder="Update your phone"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <span className="text-red-500 mt-1">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className=" bg-[#F5F0BF] px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md focus:outline-none cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
