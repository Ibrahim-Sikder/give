import TextField from "@mui/material/TextField";
import { FaTrashAlt, FaEdit, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, Select } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle";

import { FieldValues, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddDonationsMutation } from "../../../redux/feature/donations/donationApi";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddDonations = () => {
  const [AddDonations, { isError, isLoading, isSuccess }] =
    useAddDonationsMutation();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
      title: "Donation create successfully !",
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
        const { title, amount, description, categories } = data;
        const donationsData = {
          title,
          amount,
          image: imageUrl,
          categories,
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
        <SectionTitle title="Add Donations " text="" />
        <div className="addDonationWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                {...register("title", { required: true })}
                name="title"
                className="donationFields"
                fullWidth
                label="Title "
              />

              <TextField
                {...register("amount", { required: true })}
                name="amount"
                type="number"
                className="donationFields"
                fullWidth
                label="Amount"
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
              <button>Add Donations </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5 mb-24 w-full">
        <div className="flex items-center justify-between  mb-5">
          <h3 className="text-3xl font-bold text-center "> Donations List: </h3>
          <div className="flex items-center">
            <Search className="searchBox">
              <SearchIconWrapper>
                <SearchIcon className="searchIcon" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <button className="bg-[#42A1DA] text-white px-2 py-2 rounded-sm ml-2">
              Search
            </button>
          </div>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            <thead className="tableWrap">
              <tr>
                <th>SL</th>
                <th>Title</th>
                <th>Category </th>
                <th>Amount</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Car </td>
                <td>BMW2343</td>
                <td>BDT1005</td>

                <td>
                  <div className="flex items-center justify-center ">
                    <Link to="/dashboard/update-supplier">
                      <FaEdit size={30} className="text-[#00715D]" />
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center ">
                    <FaTrashAlt size={30} className="text-red-500" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AddDonations;
