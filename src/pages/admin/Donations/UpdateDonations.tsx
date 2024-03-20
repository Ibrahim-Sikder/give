/* eslint-disable @typescript-eslint/no-unused-vars */
import TextField from "@mui/material/TextField";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";
import { FieldValues, useForm } from "react-hook-form";
import { TData } from "../../../type/type";


const UpdateDonations = () => {

const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const donationData = useLoaderData();
 const { _id, title, amount, description}:TData = donationData as TData


  const onSubmit = (data:FieldValues) => {
    const { title, amount, categories, description, image } = data
    const updateDonation = {
      title, amount, categories, description, image

    }
    fetch(`https://aidurgency-server.vercel.app/api/v1/donations/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Donation Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate('/dashboard/donations-list')
        }
      });
  };



  return (
    <section>
      <div className="addDonationWraps">
        <SectionTitle title="Update Donations " text="" />
        <div className="addDonationWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                {...register("title")}
                name="title"
                className="donationFields"
                fullWidth
                label="Title "
                defaultValue={title}
              />

              <TextField
                {...register("amount")}
                name="amount"
                type="number"
                className="donationFields"
                fullWidth
                label="Amount"
                defaultValue={amount}
              />
              <div>
                <FormControl fullWidth className="donationFields">
                  <InputLabel htmlFor="grouped-native-select">
                    Categories
                  </InputLabel>
                  <Select
                    {...register("categories", { required: true })}
                    name="categories"
                    fullWidth
                    native
                    id="grouped-native-select"
                    label="Car Registration No  "
                  >
                    <option value="Food">Food </option>
                    <option value="Medications and Medical Supplies:">
                      Medications and Medical Supplies:{" "}
                    </option>
                    <option value="Communication Devices">
                      Communication Devices{" "}
                    </option>
                    <option value="Water">Water</option>
                    <option value="Hygiene Supplies">Hygiene Supplies</option>
                    <option value="Shelter Materials">
                      Shelter Materials:
                    </option>
                    <option value="Clothing and Blankets">
                      Clothing and Blankets
                    </option>
                    <option value="First Aid Supplies">
                      First Aid Supplies
                    </option>
                    <option value="Tools">Tools </option>
                  </Select>
                </FormControl>
              </div>
              <div className="donationFields">
                <input
                  {...register("image")}
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
                {...register("description")}
                name="description"
                className=" border w-full h-[160px] mt-5 border-[#ddd] resize-none rounded-md "
                defaultValue={description}
              ></textarea>
            </div>
            <div className="savebtn mt-2">
              <button>Add Donations </button>
            </div>
          </form>
        </div>
      </div>
    
    </section>
  );
};

export default UpdateDonations;
