import "./Detail.css";
import footer from "../../assets/images/footer.jpg";
import Container from "../../ui/Container";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonateModal from "./DonateModal";
import { TData } from "../../type/type";

const DonationDetails = () => {
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const donations: TData = useLoaderData() as TData;

  return (
    <div className="mb-14">
      <div className="volunteerContainer allDonationContainers">
        <div className="volunteerContents">
          <h2 className="text-3xl md:text-5xl font-bold ">{donations.title}</h2>
          <p className="mt-2">{donations.categories}</p>
        </div>
      </div>

      <Container className="mt-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3 ">
            <Search className="searchBox  ">
              <SearchIconWrapper>
                <SearchIcon className="searchIcon" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <div className="mt-5">
              <h3>Categories </h3>

              <ul className="space-y-4 text-sm footerList">
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Blog</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Child Care </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Disaster </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Latest Post </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Post Type</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <HiChevronRight size={20} />
                    <span>Who We Are </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-5 mt-5">
              <div>
                <h3 className="mb-5">Latest Post </h3>
                <div className="flex ">
                  <img className="w-20" src={footer} alt="" />
                  <div className="ml-3">
                    <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                    <small className="text-[#998963]">15 Feb 2024</small>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex ">
                  <img className="w-20" src={footer} alt="" />
                  <div className="ml-3">
                    <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                    <small className="text-[#998963]">15 Feb 2024</small>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex ">
                  <img className="w-20" src={footer} alt="" />
                  <div className="ml-3">
                    <p>Lorem Ipsum. Proin Gravida Nibh Vel</p>
                    <small className="text-[#998963]">15 Feb 2024</small>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleOpen}
              className="btn mt-5 px-8 py-3 text-white w-full flex justify-center"
            >
              Donate Now
            </button>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <img
              className="w-full h-[400px] object-cover "
              src={donations.image}
              alt=""
            />

            <div className="mt-5">
              <h3 className="">{donations.categories} </h3>
              <b className="mt-3 mb-5 block">
                ${donations.amount} USD Distributor for {donations.categories}
              </b>
              <p>{donations.description}</p>
            </div>
          </div>
        </div>
      </Container>

      {open && <DonateModal open={open} onClose={handleClose} />}
    </div>
  );
};

export default DonationDetails;
