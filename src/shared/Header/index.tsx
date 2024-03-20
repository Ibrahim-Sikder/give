import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiLocationMarker, HiOutlinePhone } from "react-icons/hi";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/feature/auth/authSlice";
import { toggleTheme } from "../../redux/feature/themeSlice";
import { useState } from "react";
import { Close } from "@mui/icons-material";

const Header = () => {
  const { email } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const { darkMode } = useAppSelector((store) => store.theme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header!.classList.toggle("sticky", window?.scrollY > 50);
  });

  const [toggle, setToggle] = useState(true);
  const toggleMobileMenu = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <div className="bg-[#191919] text-white hidden sm:block">
        <Container className="">
          <nav className="flex items-center justify-between w-full h-10 ">
            <div className="flex items-center">
              <div className="mr-5">
                <span className="flex items-center ">
                  {" "}
                  <HiLocationMarker className="mr-2" />{" "}
                  <small> 001 Columbus Road, Floor</small>
                </span>
              </div>
              <span className="flex items-center ">
                {" "}
                <HiOutlinePhone className="mr-2" />{" "}
                <small>4Contact Us! (222) 890 6</small>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </nav>
        </Container>
      </div>
      <div className="navbarItemsWrap">
        <div className="navbar">
          <Container className="">
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="h-[80px]  flex   w-full  "
            >
              <nav className="flex items-center justify-between w-full ">
                <Link to="/">
                  <b className="text-xl md:text-4xl ">
                    <b className="text-[#00715D] logoIcon">G</b>
                    <b className="]">ive</b>
                  </b>
                </Link>

                <ul className="space-x-5  hiddenNavBar md:flex items-center navItems navList">
                  <li>
                    {" "}
                    <NavLink to="/donations">All Donations</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/volunteer">Volunteer</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/community">Community</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/leaderboard">Leader Board</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/about-us">About Us </NavLink>{" "}
                  </li>

                  {email ? (
                    <>
                      <Link to="/dashboard/dashboard">Dashboard</Link>
                    </>
                  ) : (
                    ""
                  )}
                </ul>

                <div className="flex items-center logOutBtnWrap">
                  <button
                    onClick={handleToggleTheme}
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2 "
                  >
                    {darkMode ? (
                      <HiOutlineSun size={30} />
                    ) : (
                      <HiOutlineMoon size={30} />
                    )}
                  </button>
                 <div>
                 {email ? (
                    <>
                      <button
                        className="logoutBtn text-black"
                        onClick={handleLogout}
                      >
                        Log Out{" "}
                      </button>
                    </>
                  ) : (
                    <button className="logoutBtn  text-black">
                      <NavLink to="/login">Login</NavLink>
                    </button>
                  )}
                 </div>
                </div>
                <button onClick={toggleMobileMenu} className="cursor-pointer">
                  {toggle ? (
                    <>
                      {" "}
                      <FaBars
                        className="block lg:hidden  mobileIcon cursor-pointer"
                        size={20}
                      />
                    </>
                  ) : (
                    <>
                      <Close/>
                    </>
                  )}
                </button>
              </nav>
            </motion.header>

            <ul
              className={` space-y-4 ${toggle ? "mobileMenu2" : "mobileMenu"}`}
            >
              <li>
                {" "}
                <NavLink to="/donations">All Donations</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/volunteer">Volunteer</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/community">Community</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/leaderboard">Leader Board</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/about-us">About Us </NavLink>{" "}
              </li>

              {email ? (
                <>
                  <Link to="/dashboard/dashboard">Dashboard</Link>
                </>
              ) : (
                ""
              )}

              <div className="flex items-center logOutBtnWrap logOutBtnWrap2">
                <button
                  onClick={handleToggleTheme}
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2"
                >
                  {darkMode ? (
                    <HiOutlineSun size={30} />
                  ) : (
                    <HiOutlineMoon size={30} />
                  )}
                </button>
                {email ? (
                  <>
                    <button
                      className="logoutBtn text-black"
                      onClick={handleLogout}
                    >
                      Log Out{" "}
                    </button>
                  </>
                ) : (
                  <button className="logoutBtn  text-black">
                    <NavLink to="/login">Login</NavLink>
                  </button>
                )}
              </div>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
