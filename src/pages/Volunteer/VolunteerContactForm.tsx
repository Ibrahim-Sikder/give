import { TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { FaCloudUploadAlt, FaEnvelope } from "react-icons/fa";
import Container from "../../ui/Container";
import { HiOutlineClock, HiOutlinePhone } from "react-icons/hi";
import Swal from "sweetalert2";
import { useAddVolunteersMutation } from "../../redux/feature/volunteer/volunteerApi";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const VolunteerContactForm = () => {
  const [addVolunteers, { isError, isLoading, isSuccess }] =
    useAddVolunteersMutation();

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
      title: "Successfuly Create Your Profile !",
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

        const {
          givenName,
          surName,
          phone,
          email,
          country,
          location,
          name,
          message,
        } = data;

        const volunteerData = {
          givenName,
          surName,
          phone,
          email,
          country,
          location,
          name,
          message,
          image: imageUrl,
        };
        addVolunteers(volunteerData);
        reset();
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="sectionMargin mb-[80px]">
      <div className="block md:flex justify-between gap-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="block xl:flex items-center justify-between ">
            <div className="">
              <TextField
                {...register("givenName", { required: true })}
                name="givenName"
                fullWidth
                label="Given Name "
                className="inputField"
              />
            </div>
            <div className="mt-3 xl:mt-0">
              <TextField
                {...register("surName", { required: true })}
                name="surName"
                fullWidth
                label="Sur Name"
                className="inputField"
              />
            </div>
          </div>
          <div className="block xl:flex items-center justify-between mt-3">
            <div className="">
              <TextField
                {...register("email", { required: true })}
                name="email"
                fullWidth
                label="Enter Your Email "
                className="inputField"
              />
            </div>
            <div className="mt-3 xl:mt-0">
              <TextField
                {...register("phone", { required: true })}
                name="phone"
                fullWidth
                label="Phone Number "
                className="inputField"
              />
            </div>
          </div>
          <div className="block xl:flex items-center justify-between mt-3">
            <div className="">
              <TextField
                {...register("country", { required: true })}
                name="country"
                fullWidth
                label="Country"
                className="inputField"
              />
            </div>
            <div className="mt-3 xl:mt-0">
              <TextField
                {...register("location", { required: true })}
                name="location"
                fullWidth
                label="Location "
                className="inputField"
              />
            </div>
          </div>
          <div className="mt-3">
            <TextField
              {...register("subject", { required: true })}
              name="subject"
              fullWidth
              label="Subject "
              className="message"
            />
          </div>
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
          <div className="formControl">
            <textarea
              className="border border-1-[#ddd] w-full resize-none message h-[150px] mt-3 rounded-sm "
              {...register("message", { required: true })}
              name="message"
              placeholder=" Enter Your Message"
            ></textarea>
          </div>
          <div>
            <button
              className="py-3 px-5 bg-[#00715D] text-white "
              type="submit"
            >
              Join Us{" "}
            </button>
          </div>
        </form>
        <div className="bg-[#00715D] mt-10 sm:mt-0 p-10 text-white contactS">
          <h2>Interest to get involved?</h2>
          <div className="my-8 space-y-2">
            <p>Box 3233</p>
            <p>1810Kings Way</p>
            <p>Ismail Tour, 5th Avenue,Cox's Bazar, Bangladesh</p>
          </div>
          <div className="mt-8 space-y-3 ">
            <div className="flex items-center">
              <HiOutlinePhone size={25} />
              <p className="ml-2">Bangladesh: 88-017575585</p>
            </div>
            <div className="flex items-center">
              <HiOutlineClock size={25} />
              <p className="ml-2">Mon - Fri : 8:00am - 6:00pm</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope size={25} />
              <p className="ml-2">aidurgency@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VolunteerContactForm;
