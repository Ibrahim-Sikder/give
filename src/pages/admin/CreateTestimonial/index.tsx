import TextField from "@mui/material/TextField";
import {  FaCloudUploadAlt } from "react-icons/fa";


import SectionTitle from "../../../components/SectionTitle";

import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCreateTestimonialMutation } from "../../../redux/feature/testimonial/testimonialApi";
import TestimonialList from "./TestimonialList";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const CreateTestimonial = () => {
  const [AddDonations, { isError, isLoading, isSuccess }] =
    useCreateTestimonialMutation();
 

  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  if (isError) {
    return <>Something went to wrong </>;
  }
  if (isLoading) {
    return <>Loading....... </>;
  }
  if (isSuccess) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Testimonial create successfully !",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.url;
        const { title, name, description, } = data;
        const donationsData = {
          title,
          image: imageUrl,
          name,
          description,
        };
        AddDonations(donationsData);
        reset();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="addDonationWraps">
        <SectionTitle title="Add Testimonial " text="" />
        <div className="addDonationWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                {...register("name", { required: true })}
                name="name"
                className="donationFields"
                fullWidth
                label="Name"
              />

              <TextField
                {...register("title", { required: true })}
                name="title"
                type="text"
                className="donationFields"
                fullWidth
                label="Title"
              />
              <div className="donationFields">
                <input
                  {...register("image", { required: true })}
                  name="image"
                  type="file"
                  id="files"
                  className="hidden"
                />
                <label
                  htmlFor="files"
                  className="flex items-center justify-center cursor-pointer bg-[#42A1DA] text-white py-2 rounded-md "
                >
                  <span>
                    <FaCloudUploadAlt size={30} className="mr-2" />
                  </span>
                  Upload Image
                </label>
              </div>
              <textarea
                {...register("description", { required: true })}
                name="description"
                className=" border w-full h-[160px] mt-5 border-[#ddd] resize-none rounded-md "
              ></textarea>
            </div>
            <div className="savebtn mt-2">
              <button>Add Testimonial </button>
            </div>
          </form>
        </div>
      </div>
     <TestimonialList/>
    </section>
  );
};

export default CreateTestimonial;
