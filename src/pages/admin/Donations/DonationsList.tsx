import { FaTrashAlt, FaEdit, FaDonate, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NotificationAdd } from "@mui/icons-material";
import { FaUserGear } from "react-icons/fa6";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  useDeleteDonationsMutation,
  useGetDonationsQuery,
} from "../../../redux/feature/donations/donationApi";
import Swal from "sweetalert2";





const DonationsList = () => {


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

  const {
    data: donationsData,
    isLoading,
    isError,
  } = useGetDonationsQuery(undefined);

  const [deleteDonations, {isSuccess}] = useDeleteDonationsMutation();

  if (isError) {
    return <>Something went to wrong </>;
  }
  if (isLoading) {
    return <>Loading....... </>;
  }

if(isSuccess){
  Swal.fire({
    title: "Success!",
    text: "Donation Delete Successfully",
    icon: "success",
    confirmButtonText: "Cool",
  });
}
  type TData = {
    _id: string;
    image: string;
    categories: string;
    amount: string;
    title: string;
  };




  return (
    <div className="mt-5 mb-24 w-full">
      <div className="flex justify-between border-b-2 pb-3">
        <div className="flex items-center mr-[80px]  justify-center topProductBtn">
          <Link to="/dashboard/create-donation">
            <button className="btn text-white py-4 px-8 flex items-center ">
              {" "}
              <FaPlus className="mr-2 size-4" /> <span>Add Donations</span>{" "}
            </button>
          </Link>
        </div>
        <div className="flex  justify-end items-end">
          <NotificationAdd className="mr-2" />
          <FaUserGear size={30} />
        </div>
      </div>
      <div className="flex items-center justify-between my-3 mb-8">
        <div className="flex items-center justify-center ">
          <FaDonate size={70} className="text-[#00715D]" />
          <div className="ml-2">
            <h3 className="text-2xl font-bold"> Donations </h3>
            <span>Manage Donations </span>
          </div>
        </div>
        <div className="productHome">
          <span>Home / </span>
          <span>Donations / </span>
          <span>New Donations </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 bg-[#F1F3F6] py-5 px-3">
        <h3 className="text-3xl font-bold mb-3"> Donations List:</h3>
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
            {donationsData?.map((data: TData, i: number) => (
              <tr key={data._id}>
                <td> {i + 1} </td>
                <td>{data.title} </td>
                <td>{data.categories}</td>
                <td>{data.amount}</td>

                <td>
                  <div className="flex items-center justify-center ">
                    <Link to={`/dashboard/update-donations/${data._id}`}><FaEdit
                      size={30}
                      className="text-[#00715D]"
                    /></Link>
                  </div>
                
                </td>
                <td>
                  <div className="flex items-center justify-center cursor-pointer ">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteDonations(data._id);
                      }}
                    >
                      <FaTrashAlt size={30} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default DonationsList;
