import SearchIcon from "@mui/icons-material/Search";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useGetTestimonialQuery } from "../../../redux/feature/testimonial/testimonialApi";

type TTestimonial = {
  _id: string,
  name: string,
  title: string,
}
const TestimonialList = () => {
    const {data:testimonialData, isLoading, isError} = useGetTestimonialQuery(undefined)
console.log(testimonialData)
    if(isLoading){
        return <p>Loading......</p>
    }
    if(isError){
        return <p>Something went to wrong </p>
    }

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
    return (
        <div className="mt-5 mb-24 w-full">
        <div className="flex items-center justify-between  mb-5">
          <h3 className="text-3xl font-bold text-center "> Testimonial List: </h3>
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
                <th>Name</th>
                <th>Title</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
             {
                testimonialData.map((data:TTestimonial, i:number)=>(
                    <tr key={data._id}>
                    <td>{i+1}</td>
                    <td>{data.name} </td>
                    <td>{data.title}</td>
    
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
                ))
             }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TestimonialList;