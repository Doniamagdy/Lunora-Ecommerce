import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import ReusableButton from "../../components/ui/ReusableButton";
import { useForm } from "react-hook-form";
import useAddAddress from "../../hooks/useAddAddress";

function AddAddress() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useAddAddress({
    onSuccess: () => {
      handleClose();
    },
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #E8E5E1",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="">
      <button
        onClick={handleOpen}
        className="bg-[#F5F0BF]  p-2 rounded-md cursor-pointer"
      >
        + Add Address
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              fontSize: "22px",
              fontWeight: 600,
              marginBottom: "20px",
            }}
          >
            Add new address
          </Typography>
          <Typography id="modal-modal-description">
            <form
              onSubmit={handleSubmit((data) => {
                mutate(data);
              })}
              className="space-y-4"
            >
              <Input
                type="text"
                placeholder="Address name Home or Work"
                className="w-full my-3"
                {...register("name", { required: "Address name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 mt-1">{errors.name.message}</span>
              )}

              <Input
                type="text"
                placeholder="Address"
                className="w-full my-3"
                {...register("details", {
                  required: "Address details is required",
                })}
              />
              {errors.details && (
                <span className="text-red-500 mt-1">
                  {errors.details.message}
                </span>
              )}

              <Input
                type="number"
                placeholder="Phone number"
                className="w-full my-3"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-red-500 mt-1">
                  {errors.phone.message}
                </span>
              )}

              <Input
                type="text"
                placeholder="City"
                className="w-full my-3"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <span className="text-red-500 mt-1">{errors.city.message}</span>
              )}

              <ReusableButton
                type="submit"
                buttonText={"+ Add address"}
                className="bg-[#F5F0BF] p-3 rounded-md cursor-pointer"
              />
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AddAddress;
