/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { Accordion, AccordionSummary } from "@mui/material";
import { FaCarAlt, FaPlus, FaThLarge, FaHome, FaDonate } from "react-icons/fa";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Home, Logout } from "@mui/icons-material";
import "./Layout.css";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/feature/auth/authSlice";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  const toggleSideBar = () => {
    setToggle((toggle) => !toggle);
  };

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    console.log("hello");
  };

  return (
    <main>
      <div className="flex  ">
        <div className={`${toggle ? `drawer-content` : `activeDrawer`}`}>
          <Outlet />
        </div>
        <div>
          <aside className="flex ">
            <div
              className={`${
                toggle
                  ? `fixed overflow-y-scroll overflow-x-hidden drawwerLeftSide  h-screen text-lg font-semibold  bg-[#2C3136] text-white`
                  : `fixed overflow-y-scroll overflow-x-hidden sideBarActive h-screen text-lg font-semibold  bg-[#2C3136] text-white`
              }`}
            >
              <div className="mb-5">
                <NavLink to="/" className="shadow-md z-10">
                  <h3 className="text-2xl font-bold mt-3 ml-3">AidUrgency </h3>
                </NavLink>
              </div>

              <NavLink to="/dashboard">
                <div className="flex items-center dashboardItems">
                  <FaHome className="dashboardIcon" />
                  <span>Dashboard</span>
                </div>
              </NavLink>
              <Accordion className="dashboardAccordion ">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>
                    <div className="flex items-center justify-center">
                      <FaDonate />
                      <span className="ml-2">Donations</span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaPlus className="mr-2" />
                      <NavLink to="/dashboard/create-donation">
                        {" "}
                        Add Donation{" "}
                      </NavLink>
                    </span>
                  </Typography>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaThLarge className="mr-2" />
                      <NavLink to="/dashboard/donations-list">
                        Donations List
                      </NavLink>
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography>
                    <div className="flex items-center justify-center">
                      <FaCarAlt />
                      <span className="ml-2">Users </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaPlus className="mr-2" />
                      <NavLink to="/dashboard/qutation">
                        Complete Project
                      </NavLink>
                    </span>
                  </Typography>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaThLarge className="mr-2" />
                      <NavLink to="/dashboard/all-users">All Users</NavLink>
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="dashboardAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="accordionExpandIcon" />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className="dashboardAccordionSummary"
                >
                  <Typography>
                    <div className="flex items-center justify-center">
                      <FaCarAlt />
                      <span className="ml-2">Testimonial </span>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaPlus className="mr-2" />
                      <NavLink to="/dashboard/create-testimonial">
                        Create testimonial
                      </NavLink>
                    </span>
                  </Typography>
                  <Typography className="accordionTypoGrapy">
                    <span className="flex items-center">
                      <FaThLarge className="mr-2" />
                      <NavLink to="/dashboard/all-users">Testimonial</NavLink>
                    </span>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <div
                onClick={handleLogout}
                className="flex items-center dashboardItems cursor-pointer "
              >
                <Logout className="dashboardIcon" />
                <span>Log Out </span>
              </div>
            </div>
            <div
              className={`${toggle ? `activeToggle` : `navActive`}`}
              onClick={toggleSideBar}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
            <div
              className={`${
                toggle ? `rightSideBarWrap` : `activeRightSideBarWrap`
              }`}
            >
              <div className="mt-14">
                <div>
                  <div className="toolTipWrap">
                    <Home className="tooltipIcon" />
                    <b className="toolTip">Dashboard </b>
                  </div>
                </div>

                <div className="mt-[14px]">
                  <div className="toolTipWrap">
                    <FaDonate className="tooltipIcon" />
                    <b className="toolTip">Donations </b>
                  </div>
                </div>
                <div className="mt-[14px]">
                  <div className="toolTipWrap">
                    <FaDonate className="tooltipIcon" />
                    <b className="toolTip">Add Donation </b>
                  </div>
                </div>

                <div className="mt-[14px]">
                  <div className="toolTipWrap">
                    <Logout className="tooltipIcon" />
                    <b className="toolTip">Log Out </b>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
